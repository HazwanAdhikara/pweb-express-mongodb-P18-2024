import { connectToDatabase } from "./db-connection";
import express from "express";
import { authRouter } from "./routes/auth.route";
import bookRoutes from "./routes/book.route";
import mechanismRoutes from "./routes/mechanism.route";
import { Verification } from "./middleware/auth";
const app = express();

app.use(express.json());

// check endpoint
app.get("/", (_, response) => {
  const date = new Date().toDateString(); // Mengambil tanggal saat ini
  response.status(200).json({
    status: "success",
    message: "Server is up and running 💫",
    date: date,
  });
});

app.use("/auth", authRouter);
app.use("/book", Verification, bookRoutes);
app.use("/mechanism", Verification, mechanismRoutes);

const PORT = 4000;
app.listen(PORT, () => {
  console.log(`Express is running on Port ${PORT}`);
});

connectToDatabase();
