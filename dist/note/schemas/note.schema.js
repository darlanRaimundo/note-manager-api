"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.NoteSchema = void 0;
const mongoose = require("mongoose");
exports.NoteSchema = new mongoose.Schema({
    title: String,
    description: String,
    createdAt: Date,
    updatedAt: Date,
    userId: String,
});
//# sourceMappingURL=note.schema.js.map