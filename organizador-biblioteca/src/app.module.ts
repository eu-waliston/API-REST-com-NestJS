import { Module } from '@nestjs/common';
import { BooksController } from './Controllers/books/books.controller';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [
    MongooseModule.forRoot(
      'mongodb+srv://wesantosdev:4002892233513341@rest.gadbbad.mongodb.net/?retryWrites=true&w=majority',
    ),
  ],
  controllers: [BooksController],
  providers: [],
})
export class AppModule {}
