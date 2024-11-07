import Book, { IBook as BookType } from "../models/book.model";

export const MechanismService = {
  // Fungsi untuk meminjam buku
  async borrowBook(
    bookId: string
  ): Promise<{ message: string; remainingQty: number }> {
    const book = await Book.findById(bookId);
    if (!book) {
      throw new Error("Book not found");
    }

    // Cek ketersediaan buku
    if (book.qty <= 0) {
      throw new Error("Book not available");
    }

    // Mengurangi jumlah buku
    book.qty -= 1;
    await book.save();

    return { message: "Book borrowed successfully", remainingQty: book.qty };
  },

  // Fungsi untuk mengembalikan buku
  async returnBook(
    bookId: string
  ): Promise<{ message: string; availableQty: number }> {
    const book = await Book.findById(bookId);
    if (!book) {
      throw new Error("Book not found");
    }

    // Memastikan tidak melebihi jumlah awal
    if (book.qty >= book.initialQty) {
      throw new Error("Invalid return: quantity exceeds initial quantity");
    }

    // Menambah jumlah buku
    book.qty += 1;
    await book.save();

    return { message: "Book returned successfully", availableQty: book.qty };
  },
};
