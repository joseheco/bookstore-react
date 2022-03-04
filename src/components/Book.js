import React from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { removeBook } from '../redux/books/books';
import BookPorcent from './BookPorcent';
import BookProgress from './BookProgress';

const Book = ({
  id, author, title, category,
}) => {
  const dispatch = useDispatch();
  const remove = () => {
    dispatch(removeBook(id));
  };
  return (
    <>
      <div className="Book">
        <div>
          <li className="newBook">
            <h2>Book</h2>
            <p>{title}</p>
            <p>{author}</p>
            <p>{category}</p>
            <button type="button" className="delBtn" onClick={() => { remove(id); }}>Remove</button>
          </li>
        </div>
        <div className="porcent">
          <BookPorcent />
        </div>
        <div className="progress">
          <BookProgress />
        </div>
      </div>
    </>
  );
};
Book.propTypes = {
  id: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  category: PropTypes.string.isRequired,
};
export default Book;
