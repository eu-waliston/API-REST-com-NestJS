import { Body, Controller, Delete, Get, Patch, Post } from '@nestjs/common';
import { BookDTO } from 'src/DTO/book.dto';

@Controller('books')
export class BooksController {
  @Get()
  getAllBooks(): string {
    return 'Todos os livros estão aqui';
  }

  @Post()
  saveBook(@Body() newBook: BookDTO): BookDTO {
    return newBook;
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
