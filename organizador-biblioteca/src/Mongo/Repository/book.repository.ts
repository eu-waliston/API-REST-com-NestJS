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
}
