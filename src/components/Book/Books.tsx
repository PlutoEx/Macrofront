/** @jsx jsx */
import {jsx, css} from "@emotion/react";
import React, {useState} from 'react';
import {BookCardImgStyled, BookCardStyled, BookInfoStyled, BooksGridStyled, TextStyleS} from "./Book.styles";
import Book from "./Book";

export interface BookData {
    key: string;
    title: string;
    author_name: string[];
    cover_i: number;
    first_publish_year: number;
    publisher?: string[];
    isbn: string[];
}

interface BooksProps {
    books: BookData[];
}

const Books: React.FC<BooksProps> = ({books}) => {
    const [selectedBook, setSelectedBook] = useState<string[] | null>(null);
    const [modalIsOpen, setIsOpen] = useState<boolean>(false);
    const [bookCoverId, setBookCoverId] = useState<number | null>(null);

    const handleBookClick = (bookKey: string[], bookCoverId: number) => {
        setSelectedBook(bookKey);
        setBookCoverId(bookCoverId)
        setIsOpen(true);
    };

    const handleClose = () => {
        setSelectedBook(null);
        setBookCoverId(null);
        setIsOpen(false);
    };

    return (
        <BooksGridStyled>
            {books.map((book) => (
                <BookCardStyled key={book.key} onClick={() => handleBookClick([book.key, book.isbn[0]], book.cover_i)}>
                    <BookCardImgStyled
                        src={`https://covers.openlibrary.org/b/id/${book.cover_i}-M.jpg`}
                        alt={`Cover for ${book.title}`}/>
                    <BookInfoStyled>
                        <strong css={TextStyleS}>{book.title}</strong>
                        <p css={TextStyleS}>{book.author_name}</p>
                        <p css={TextStyleS}>Publish year: {book.first_publish_year}</p>
                    </BookInfoStyled>
                </BookCardStyled>
            ))}
            {selectedBook && bookCoverId && <Book
                bookKeys={selectedBook}
                bookCoverId={bookCoverId}
                isOpen={modalIsOpen}
                handleClose={handleClose}
            />
            }
        </BooksGridStyled>
    );
};

export default Books;