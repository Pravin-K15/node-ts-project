import express from "express";
import { graphqlHTTP } from "express-graphql"
import RootSchema from "./graphql";
import { createServer } from "http";
import { Server } from "socket.io";
import { compare, hash } from "bcrypt";

import UserModel from "./db/user";

const app = express(); // Express
const server = createServer(app); // HTTP
const io = new Server(server); // Socket.IO

const sessions: any = {};

import "./db"
import ProductsModel from "./db/product";

//Template
app.set("view engine", "ejs");

app.use("/graphql", graphqlHTTP({
    schema: RootSchema,
    rootValue: {},
    graphiql: true
}))

app.use(express.json());
// app.use(express.urlencoded());

// app.get("/", function (req: Express.Request, res: Express.Response) {
app.get("/", function (req, res) {
    res.render("homepage")
})

app.get("/api/v1/products", async function(req,res){
    const products = await ProductsModel.find();
    res.send(products);
})

app.post("/api/v1/user/register", async function(req, res){
    const {body} = req;
    const {email, password, name} = body;
    const hashedPassword = await hash(password, 10);

    const user = new UserModel({ email, password: hashedPassword, name})
    const doc = await user.save();
    res.json(doc);
})

app.post("/api/v1/user/login", async function(req, res){
    const {body} = req;
    const {email, password, name} = body;
    const doc = await UserModel.findOne({email});
    try {
        if(doc){
            const hashedPassword = doc.password;
            const isvalid = await compare(password, hashedPassword);
            if(!isvalid){
                throw "invalid password"
            }
            res.json({token: "dfasdfdsfasfsfasdaffdsasfafdag"})
        }
        else{
            throw "Email and password is invalid"
        }
    
    } catch (error) {
        res.status(401).json({status: "error", message: error});
    }

    // const hashedPassword = await hash(password, 10);
    // const user = new UserModel({ email, password: hashedPassword, name})
    // const doc = await user.save();
    // res.json(doc);
})

io.on("connection", function(socket){
    console.log("new connection created")
    socket.on("send-message", function(data){
        const message = JSON.parse(data);
        console.log(message);
        if(sessions[message.user])
            {
                sessions[message.user].emit("response-message", { message : message.message })
            }
    })

    socket.on("user-info", function(data){
        const message : {user: string}= JSON.parse(data);

        if(!sessions[message.user])
            {
                sessions[message.user] = socket;
                socket.emit("current-users", Object.keys(sessions))
                io.emit("new-user", { name : message.user })
            }
        else
            {
                socket.emit("error", {message: "duplicate user"})
            }
    })

})


// app.listen(8000);
server.listen(8000);

export{
    app
}