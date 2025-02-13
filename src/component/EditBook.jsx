import React from "react";

export default function EditBook({ book, onEdit, edit}) {
  const handleSubmit = (e) => {
    e.preventDefault();
    onEdit(book.id, editBook);
    edit()
  };
  const [editBook, setEditBook] = React.useState(book.title);

  return (
    <div className="book-edit">
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          className="input"
          onChange={(e) => setEditBook(e.target.value)}
          value={editBook}
        />
        <button className="button">save</button>
      </form>
    </div>
  );
}
