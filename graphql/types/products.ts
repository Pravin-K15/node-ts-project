import { GraphQLObjectType, GraphQLFloat, GraphQLString, GraphQLInputObjectType} from "graphql"

const Product = new GraphQLObjectType({
    name: "Product",
    fields: {
        name: { type: GraphQLString },
        price: { type: GraphQLFloat },
        id: { type: GraphQLString },
        category: { type: GraphQLString },
        brand: { type: GraphQLString },
        originCountry: { type: GraphQLString },
        discount: { type: GraphQLFloat },
        rating: { type: GraphQLFloat }
    }
})

const ProductInput = new GraphQLInputObjectType({
    name: "ProductInput",
    fields: {
        name: { type: GraphQLString },
        price: { type: GraphQLFloat },
        category: { type: GraphQLString },
        brand: { type: GraphQLString },
        originCountry: { type: GraphQLString },
        discount: { type: GraphQLFloat },
        rating: { type: GraphQLFloat }
    }
})


export {Product, ProductInput};