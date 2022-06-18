"use strict";
exports.__esModule = true;
var mongoose_1 = require("mongoose");
var ProductSchema = new mongoose_1.Schema({
    name: { type: String },
    price: { type: Number },
    category: { type: String, "default": "-" },
    brand: { type: String, "default": "-" },
    originCountry: { type: String, "default": "India" },
    discount: { type: Number, "default": 0 },
    rating: { type: Number, "default": 3 }
});
var ProductsModel = (0, mongoose_1.model)("products", ProductSchema, "products");
exports["default"] = ProductsModel;
//# sourceMappingURL=product.js.map