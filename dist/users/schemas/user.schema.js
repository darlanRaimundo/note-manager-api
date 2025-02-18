"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UsersSchema = void 0;
const mongoose = require("mongoose");
exports.UsersSchema = new mongoose.Schema({
    name: String,
    email: String,
    password: String,
});
//# sourceMappingURL=user.schema.js.map