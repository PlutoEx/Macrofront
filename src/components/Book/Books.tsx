import React, { useState } from 'react';
import { BooksGridStyled, unsetButton } from './Book.styles';
import Book from './Book';
import { BookData, BooksProps } from './types';
import Card from '../Card';

const Books: React.FC<BooksProps> = ({ books }) => {
  const [selectedBook, setSelectedBook] = useState<string[] | null>(null);
  const [modalIsOpen, setIsOpen] = useState<boolean>(false);
  const [bookCoverId, setBookCoverId] = useState<number | null>(null);

  const handleBookClick = (bookKey: string[], bookCoverId: number) => {
    setSelectedBook(bookKey);
    setBookCoverId(bookCoverId);
    setIsOpen(true);
  };

  const handleClose = () => {
    setSelectedBook(null);
    setBookCoverId(null);
    setIsOpen(false);
  };

  return (
    <BooksGridStyled>
      {books.map((book: BookData) => (
        <button
          css={unsetButton}
          onClick={() => handleBookClick([book.key, book.isbn[0]], book.cover_i)}
        >
          <Card
            img={`https://covers.openlibrary.org/b/id/${book.cover_i}-M.jpg`}
            alt={`Cover for ${book.title}`}
            title={book.title}
            authors={book.author_name}
            pub_year={book.first_publish_year}
          />
        </button>
      ))}
      {selectedBook && bookCoverId && (
        <Book
          bookKeys={selectedBook}
          bookCoverId={bookCoverId}
          isOpen={modalIsOpen}
          handleClose={handleClose}
        />
      )}
    </BooksGridStyled>
  );
};

export default Books;
