import React from 'react';
import BookPorcent from './BookPorcent';
import BookProgress from './BookProgress';
import BookTitle from './BookTitle';

const Book = () => (
  <>
    <div className="Book">
      <div className="title">
        <BookTitle />
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

export default Book;
