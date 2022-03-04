import React from 'react';

const BookForm = () => (
  <form className="addForm">
    <label htmlFor="title">
      <input id="title" placeholder="Title" required />
    </label>
    <label htmlFor="author">
      <input id="author" placeholder="Author" required />
    </label>
    <button type="submit" className="add btn">Add</button>
  </form>
);

export default BookForm;