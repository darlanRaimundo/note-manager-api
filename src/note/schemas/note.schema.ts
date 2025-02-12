import * as mongoose from 'mongoose';

export const NoteSchema = new mongoose.Schema({
  description: String,
  createdAt: Date,
  updatedAt: Date,
  userId: String,
});
