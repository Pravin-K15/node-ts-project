"use strict";
exports.__esModule = true;
var mongoose_1 = require("mongoose");
var UserSchema = new mongoose_1.Schema({
    name: { type: String },
    email: { type: String },
    password: { type: String }
});
var UserModel = (0, mongoose_1.model)("users", UserSchema, "users");
exports["default"] = UserModel;
//# sourceMappingURL=user.js.map