import { Schema } from 'mongoose';
import { AuthorSchema } from './author.schema';

export const BookSchema = new Schema({
  name: String,
  author: [AuthorSchema],
  language: String,
  publisher: String,
  pages: Number,
});
