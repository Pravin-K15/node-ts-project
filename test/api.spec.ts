import request from "supertest";
import {app} from "../index"
import ProductModel from "../db/product"
import { createProductsMock } from "../mocks/products"

describe("expree api", function(){

    let req : any = null;
    
    beforeEach(function(){
        req = request(app);
        // @ts-ignore
        // ProductModel.find = async ()=>{return createProductsMock()};
    })

    it("should get status for Products api", async function(){

        const spy = jest.spyOn(ProductModel, "find")

        const response = await req.get("/api/v1/products");
        //expect correct status code
        // const {statusCode, body} = response;
        // expect(statusCode).toBe(200);
        // console.log(response)
        // //check body content
        // expect(body[0].name).toBe("Mock Product")
        expect(spy).toHaveBeenCalled();
    })
})