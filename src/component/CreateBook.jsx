import React from "react";

export default function BookCreate({ onCreate }) {
  const [title, SetTitle] = React.useState("");
  const handleSubmit = (e) => {
    e.preventDefault();

    if (title === "") return;
    onCreate(title);
    SetTitle("");
  };

  return (
    <div className="book-create">
      <form onSubmit={handleSubmit}>
        <input
          className="input"
          type="search"
          value={title}
          onChange={(e) => SetTitle(e.target.value)}
        />
        <button className="button is-primary">Add Books</button>
      </form>
    </div>
  );
}
