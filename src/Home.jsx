// src/components/Home.jsx


import { useNavigate } from "react-router-dom";
import BookCard from "./components/BookCard";
import books from "../src/booksData"; // Ensure this file exists in the "data" folder
import "./Home.css";

const Home = () => {
  const navigate = useNavigate();

  return (
    <div className="home-container">
      <h1>Book Library</h1>
      <button className="add-book-btn" onClick={() => navigate("/add-book")}>
        Add New Book
      </button>
      <div className="books-grid">
        {books.map((book) => (
          <BookCard key={book.id} book={book} />
        ))}
      </div>
    </div>
  );
};

export default Home;