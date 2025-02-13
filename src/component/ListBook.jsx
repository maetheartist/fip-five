import React from "react";
import BookShow from "./BookShow";

export default function ListBook({ books, onDelete, onEdit }) {
  return (
    <div className="book-list">
        {console.log(books) }
      {books.map((book) => {
        return <BookShow key={book.id} book={book} onDelete={onDelete}  onEdit={onEdit}/>;
      })}
    </div>
  );
}
