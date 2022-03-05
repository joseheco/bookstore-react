import React from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { removeBookApi } from '../redux/books/books';
import BookPorcent from './BookPorcent';
import BookProgress from './BookProgress';

const Book = ({
  // eslint-disable-next-line camelcase
  item_id, author, title, category,
}) => {
  const dispatch = useDispatch();
  const remove = () => {
    dispatch(removeBookApi(item_id));
  };
  return (
    <>
      <div className="Book">
        <div>
          <li className="newBook">
            <h2 className="category">{category}</h2>
            <p className="title">{title}</p>
            <p className="author">{author}</p>
            <button type="button" className="Comment">Comment</button>
            <button type="button" className="delBtn" onClick={() => { remove(item_id); }}>Remove</button>
            <button type="button" className="Edit">Edit</button>
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
  item_id: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  category: PropTypes.string.isRequired,
};

export default Book;
