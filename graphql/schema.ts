import { graphql, GraphQLFloat, GraphQLList, GraphQLObjectType, GraphQLSchema, GraphQLString } from "graphql"
import ProductsModel from "../db/product";
import {Product} from "./types/products"

const RootSchema = new GraphQLObjectType({
    name: "root",
    fields: {
        products: {
            type: new GraphQLList(Product),
            resolve: function () {
                return ProductsModel.find()
            }
        },
        product: {
            type: Product,
            args: { id: {type: GraphQLString}},
            resolve: function (context, args) {
                return ProductsModel.findOne({_id: args.id})
            }
        }
    }
})

export default RootSchema;