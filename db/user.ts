import { Schema, model } from "mongoose"

const UserSchema = new Schema({
    name: { type: String },
    email: { type: String },
    password: { type: String }
});

const UserModel = model("users", UserSchema, "users");

export default UserModel;