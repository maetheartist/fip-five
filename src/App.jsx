import React, { useState, useEffect } from "react";
import axios from "axios";
import CreateBook from "./component/CreateBook";
import ListBook from "./component/ListBook";

export default function App() {
  const [books, setBooks] = useState([]);
  const API_URL = "http://localhost:3001/books";


  useEffect(() => {
    const fetchBooks = async () => {
      try {
        const response = await axios.get(
          "https://openlibrary.org/search.json?q=javascript&limit=10"
        );
        setBooks(response.data.docs);
      } catch (error) {
        console.error("Error fetching books:", error);
      }
    };

    fetchBooks();
  }, []);
  const createBook = async (title) => {
    if (!title.trim()) return;
    try {
      const response = await axios.post(API_URL, { title });
      setBooks([...books, response.data]);
    } catch (error) {
      console.error("Error creating book:", error);
    }
  };


  const deleteBook = async (id) => {
    try {
      await axios.delete(`${API_URL}/${id}`);
      setBooks(books.filter((book) => book.id !== id));
    } catch (error) {
      console.error("Error deleting book:", error);
    }
  };

 
  const editBook = async (id, newTitle) => {
    if (!newTitle.trim()) return;
    try {
      const response = await axios.put(`${API_URL}/${id}`, { title: newTitle });
      setBooks(
        books.map((book) =>
          book.id === id ? { ...book, ...response.data } : book
        )
      );
    } catch (error) {
      console.error("Error updating book:", error);
    }
  };

  return (
    <div className="app-container">
      <h1>Book Listing App</h1>
      <CreateBook onCreate={createBook} />
      {console.log(books)}
      <ListBook books={books} onDelete={deleteBook} onEdit={editBook} />
    </div>
  );
}
