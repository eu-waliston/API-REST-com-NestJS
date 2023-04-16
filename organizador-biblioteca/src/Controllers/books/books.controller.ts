import { Controller, Delete, Get, Patch, Post } from '@nestjs/common';

@Controller('books')
export class BooksController {
  @Get()
  getAllBooks(): string {
    return 'Todos os livros estão aqui';
  }

  @Post()
  saveBook(): string {
    return 'Esse livro foi salvo';
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
