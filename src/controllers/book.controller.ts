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
    return;
  }
};

// GET /book/:id - Get book by ID
export const getBookById = async (req: Request, res: Response): Promise<void> => {
  try {
    const { id } = req.params;
    const book = await Book.findById(id);

    if (!book) {
      res.status(404).json({
        status: 'error',
        message: 'Book not found',
      });
      return;
    }

    res.status(200).json({
      status: 'success',
      message: 'Successfully get book',
      data: book,
    });
  } catch (error) {
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
      message: 'Book added successfully',
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

// PATCH /book/:id - Update book data by ID
export const updateBookById = async (req: Request, res: Response): Promise<void> => {
  try {
    const { id } = req.params;
    const updatedData = req.body;

    const updatedBook = await Book.findByIdAndUpdate(id, updatedData, { new: true });

    if (!updatedBook) {
      res.status(404).json({
        status: 'error',
        message: 'Book not found',
      });
    }

    res.status(200).json({
      status: 'success',
      message: 'Successfully update book',
      data: updatedBook,
    });
  } catch (error) {
    const errorMessage = error instanceof Error ? error.message : 'Unknown error occurred';
    res.status(500).json({
      status: 'error',
      message: errorMessage,
    });
  }
};

// DELETE /book/:id - Delete book by ID
export const deleteBookById = async (req: Request, res: Response): Promise<void> => {
  try {
    const { id } = req.params;
    const deletedBook = await Book.findByIdAndDelete(id);

    if (!deletedBook) {
      res.status(404).json({
        status: 'error',
        message: 'Book not found',
      });
    }

    res.status(200).json({
      status: 'success',
      message: 'Successfully remove book',
    });
  } catch (error) {
    const errorMessage = error instanceof Error ? error.message : 'Unknown error occurred';
    res.status(500).json({
      status: 'error',
      message: errorMessage,
    });
  }
};