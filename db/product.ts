import { Schema, model } from "mongoose"

const ProductSchema = new Schema({
    name: { type: String },
    price: { type: Number },
    category: { type: String, default: "-" },
    brand: { type: String, default: "-" },
    originCountry: { type: String, default: "India" },
    discount: { type: Number, default: 0 },
    rating: { type: Number, default: 3 }
});

const ProductsModel = model("products", ProductSchema, "products");

export default ProductsModel;