import { Injectable } from '@nestjs/common';
import { Model } from 'mongoose';
import { BookDTO } from 'src/DTO/book.dto';
import { Book } from '../Interface/book.interface';
import { InjectModel } from '@nestjs/mongoose';

@Injectable()
export class BookRepository {
  constructor(@InjectModel('book') private readonly bookModel: Model<Book>) {}

  async saveBook(newBook: BookDTO): Promise<Book> {
    const createdBook = new this.bookModel(newBook);
    return createdBook.save();
  }

  async getAllBooks(): Promise<Book[]> {
    return await this.bookModel
      .find({}, { __v: false })
      .sort({ name: +1 })
      .exec();
  }

  async getBookById(bookID: string): Promise<Book> {
    return await this.bookModel.findById(bookID, { __V: false });
  }

  async deleteBookByID(bookID: string): Promise<Book> {
    return this.bookModel.findByIdAndDelete(bookID);
  }

  async updateBook(bookID: string, book: BookDTO): Promise<Book> {
    return await this.bookModel.findOneAndReplace({ _id: bookID }, book);
  }

  async getBookByAuthorName(authorName: string[]): Promise<Book[]> {
    return await this.bookModel.find({
      $or: [
        { 'author.name': { $in: authorName } },
        { 'author.surname': { $in: authorName } },
      ],
    });
  }

  async getBookByName(bookName: string): Promise<Book[]> {
    return await this.bookModel.find(
      {
        name: { $regex: bookName, $options: 'i' },
      },
      { __v: false },
    );
  }
}
