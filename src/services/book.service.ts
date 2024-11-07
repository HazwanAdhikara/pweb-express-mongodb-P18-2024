import Book, { IBook as BookType } from "../models/book.model";

// Get all books
export const getAllBooks = async (): Promise<BookType[]> => {
  try {
    return await Book.find();
  } catch (error) {
    throw new Error(
      `Failed to get books: ${
        error instanceof Error ? error.message : "Unknown error"
      }`
    );
  }
};

// Get book by ID
export const getBookById = async (id: string): Promise<BookType | null> => {
  try {
    return await Book.findById(id);
  } catch (error) {
    throw new Error(
      `Failed to get book by ID: ${
        error instanceof Error ? error.message : "Unknown error"
      }`
    );
  }
};

// Add new book
export const addNewBook = async (
  bookData: Partial<BookType>
): Promise<BookType> => {
  try {
    const newBook = new Book(bookData);
    return await newBook.save();
  } catch (error) {
    throw new Error(
      `Failed to add new book: ${
        error instanceof Error ? error.message : "Unknown error"
      }`
    );
  }
};

// Update book by ID
export const updateBookById = async (
  id: string,
  updatedData: Partial<BookType>
): Promise<BookType | null> => {
  try {
    return await Book.findByIdAndUpdate(id, updatedData, { new: true });
  } catch (error) {
    throw new Error(
      `Failed to update book by ID: ${
        error instanceof Error ? error.message : "Unknown error"
      }`
    );
  }
};

// Delete book by ID
export const deleteBookById = async (id: string): Promise<BookType | null> => {
  try {
    return await Book.findByIdAndDelete(id);
  } catch (error) {
    throw new Error(
      `Failed to delete book by ID: ${
        error instanceof Error ? error.message : "Unknown error"
      }`
    );
  }
};
