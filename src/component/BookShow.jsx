import React from "react";
import EditBook from "./EditBook";

export default function BookShow({ book, onDelete, onEdit }) {
  const [showEdit, setShowEdit] = React.useState(false);
  const edit = () => {
    setShowEdit((showEdit) => !showEdit);
  };
  return (
    <div className="book-show">
      <div>
      <img src="https://picsum.photos/300/200" alt="book" />
      {showEdit ? (
        <EditBook book={book} onEdit={onEdit} edit={edit} />
      ) : (
       <h2>{ book.title}</h2>
      )}
      <div className="actions">
        <button className="edit" onClick={edit}>
          edit
        </button>
        <button className="delete" onClick={() => onDelete(book.id)}>
          delete
        </button>
      </div>
      </div>
    </div>
  );
}
