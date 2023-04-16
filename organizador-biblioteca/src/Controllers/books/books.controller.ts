import { Body, Controller, Delete, Get, Patch, Post } from '@nestjs/common';
import { BookDTO } from 'src/DTO/book.dto';
import { Book } from 'src/Mongo/Interface/book.interface';
import { BooksService } from 'src/Services/books/books.service';

@Controller('books')
export class BooksController {
  constructor(private readonly booksService: BooksService) {}

  @Get()
  getAllBooks(): string {
    return 'Todos os livros estão aqui';
  }

  @Post()
  async saveBook(@Body() newBook: BookDTO): Promise<Book> {
    return await this.booksService.saveBook(newBook);
  }

  @Patch()
  updateBook(): string {
    return 'Esse livro foi atualiuzado';
  }

  @Delete()
  deleteBook(): string {
    return 'Esse livro foi apagado';
  }
}
