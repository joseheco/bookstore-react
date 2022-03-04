import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { v4 as uuidv4 } from 'uuid';
import { sendBooksApi } from '../redux/books/books';

const BookForm = () => {
  const dispatch = useDispatch();
  const [author, setAuthor] = useState('');
  const [title, setTitle] = useState('');
  const [category, setCategory] = useState('');
  const [errorBook, setErrorBook] = useState('');
  const categories = ['Select Category',
    'Action',
    'Science-Fiction',
    'Ecology',
    'Gastronomy',
    'Anime',
  ];

  const getAuthor = (e) => {
    setAuthor(e.target.value);
  };

  const getTitle = (e) => {
    setTitle(e.target.value);
  };

  const getCategory = (e) => {
    setCategory(e.target.value);
  };

  const sumitBook = (e) => {
    e.preventDefault();
    if (title === '' || category === '') {
      setErrorBook('Please fill all fields and Category');
    } else {
      const newBook = {
        item_id: uuidv4(), title, author, category,
      };
      dispatch(sendBooksApi(newBook));
      setTitle('');
      setAuthor('');
      setCategory('');
      setErrorBook('');
    }
  };
  return (
    <div className="div-form">
      <h2 className="title-book">Add New Book</h2>
      <form className="form" onSubmit={sumitBook}>
        <div className="input">
          <input
            type="text"
            placeholder="Enter title"
            id="title"
            onChange={getTitle}
            value={title}
            required
          />
        </div>
        <div className="input">
          <input
            type="text"
            placeholder="Enter author"
            id="author"
            onChange={getAuthor}
            value={author}
            required
          />
          <span>
            {errorBook}
          </span>
        </div>
        <select className="input" onChange={getCategory} value={category}>
          {
            categories.map((category) => (
              <option key={category} value={category}>{category}</option>
            ))
          }
        </select>
        <button type="button" className="addBtn input" onClick={sumitBook}>Add Book</button>
      </form>
    </div>
  );
};
export default BookForm;
