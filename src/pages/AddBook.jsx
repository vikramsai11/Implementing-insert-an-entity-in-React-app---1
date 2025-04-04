// src/pages/AddBook.jsx

import  { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./AddBook.css"; // Create this file for styling

const AddBook = () => {
  const [book, setBook] = useState({ title: "", author: "", description: "", coverImage: "" });
  const navigate = useNavigate();

  const handleChange = (e) => {
    setBook({ ...book, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("New Book:", book);
    navigate("/");
  };

  return (
    <div className="add-book-container">
      <h1>Add a New Book</h1>
      <form onSubmit={handleSubmit}>
        <input type="text" name="title" placeholder="Title" onChange={handleChange} required />
        <input type="text" name="author" placeholder="Author" onChange={handleChange} required />
        <textarea name="description" placeholder="Description" onChange={handleChange} required />
        <input type="text" name="coverImage" placeholder="Cover Image URL" onChange={handleChange} />
        <button type="submit">Add Book</button>
      </form>
    </div>
  );
};

export default AddBook;