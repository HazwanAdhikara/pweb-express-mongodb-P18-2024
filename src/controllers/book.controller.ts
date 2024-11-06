import { Request, Response } from 'express';
import Book from '../models/book.model';

// GET /book - Get all books
export const getAllBooks = async (req: Request, res: Response) => {
  try {
    const books = await Book.find();
    res.status(200).json({
      status: 'success',
      message: 'Successfully get all books',
      data: books,
    });
  } catch (error) {
    // Type assertion to handle `error` as an instance of `Error`
    const errorMessage = error instanceof Error ? error.message : 'Unknown error occurred';
    res.status(500).json({
      status: 'error',
      message: errorMessage,
    });
  }
};

// POST /book - Add new book
export const addNewBook = async (req: Request, res: Response) => {
  try {
    const newBook = new Book(req.body);
    const savedBook = await newBook.save();
    res.status(201).json({
      status: 'success',
      message: 'Successfully added new book',
      data: savedBook,
    });
  } catch (error) {
    const errorMessage = error instanceof Error ? error.message : 'Unknown error occurred';
    res.status(500).json({
      status: 'error',
      message: errorMessage,
    });
  }
};
