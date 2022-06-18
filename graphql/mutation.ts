import { GraphQLObjectType, GraphQLSchema, GraphQLString} from "graphql"
import ProductsModel from "../db/product";
import {Product, ProductInput} from "./types/products"

const mutations = new GraphQLObjectType({
    name: "Mutations",
    fields: {
        addProduct: {
            type: new GraphQLObjectType({
                name: "addproduct",
                fields: {
                  id: {type: GraphQLString}
                },
            }), 
            args: {info: {type: ProductInput }},
            resolve: function(context, args){
                const product = new ProductsModel(args.info);
                return product.save();
            }
        },
        deleteProduct: {
            type: new GraphQLObjectType({
                name: "deleteproduct",
                fields: {
                  id: {type: GraphQLString}
                },
            }), 
            args: {id: {type: GraphQLString }},
            resolve: function(context, args){
                return ProductsModel.findByIdAndDelete(args.id)
            }
        },
        updateProduct: {
            type: new GraphQLObjectType({
                name: "updateproduct",
                fields: {
                  id: {type: GraphQLString}
                },
            }), 
            args: {id: {type: GraphQLString }, info: {type: ProductInput}},
            resolve: function(context, args){
                return ProductsModel.findByIdAndUpdate(args.id, args.info)
            }
        }
    }
})
export default mutations;