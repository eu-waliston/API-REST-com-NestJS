import { BadRequestException, Injectable } from '@nestjs/common';
import { BookDTO } from 'src/DTO/book.dto';
import { Book } from 'src/Mongo/Interface/book.interface';
import { BookRepository } from 'src/Mongo/Repository/book.repository';

@Injectable()
export class BooksService {
  constructor(private readonly bookRepository: BookRepository) {}

  async saveBook(newBook: BookDTO): Promise<Book> {
    const allBooks = await this.bookRepository.saveBook(newBook);

    if (!allBooks) {
      throw new BadRequestException(`There's no books registered yet`);
    } else {
      return allBooks;
    }
  }

  async getAllBooks(): Promise<Book[]> {
    return await this.bookRepository.getAllBooks();
  }

  async getBookById(bookID: string): Promise<Book> {
    try {
      const existsBook = await this.bookRepository.getBookById(bookID);
      if (!existsBook) {
        throw new BadRequestException("There's no Result");
      }

      return existsBook;
    } catch (error) {
      throw new BadRequestException("There's not result ");
    }
  }

  async deleteBookByID(bookID: string): Promise<Book> {
    try {
      return await this.bookRepository.deleteBookByID(bookID);
    } catch (error) {
      throw new BadRequestException("This book doesen't exist");
    }
  }

  async updateBook(bookID: string, book: BookDTO): Promise<Book> {
    const existsBook = await this.bookRepository.getBookById(bookID);
    if (!existsBook) {
      throw new BadRequestException(`There's no Result with this ID`);
    }

    const updatedBook = await this.bookRepository.updateBook(bookID, book);

    if (updatedBook) {
      return this.bookRepository.getBookById(bookID);
    } else {
      throw new BadRequestException('error in Update');
    }
  }
}
