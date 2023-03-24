import React, {useState} from 'react';
/** @jsx jsx */
import {jsx, css} from "@emotion/react";
import {BookCardImgStyled, BookCardStyled, BookInfoStyled, BooksGridStyled, TextStyle} from "./Book.styles";
import Book from "./Book";
import Modal from "react-modal";

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
    const [selectedBook, setSelectedBook] = useState<string[] | null>();
    const [modalIsOpen, setIsOpen] = useState<boolean>(false);

    const handleBookClick = (bookKey: string[]) => {
        setSelectedBook(bookKey);
        setIsOpen(true);
    };

    const handleClose = () => {
        setSelectedBook(null);
        setIsOpen(false);
    };

    return (
        <BooksGridStyled>
            {books.map((book) => (
                <BookCardStyled onClick={() => handleBookClick([book.key, book.isbn[0]])}>
                    <BookCardImgStyled
                        src={`http://covers.openlibrary.org/b/id/${book.cover_i}-M.jpg`}
                        alt={`Cover for ${book.title}`}/>
                    <BookInfoStyled>
                        <strong css={TextStyle} style={{fontSize: '10px'}}>{book.title}</strong>
                        <p css={TextStyle} style={{fontSize: '10px'}}>{book.author_name}</p>
                        <p css={TextStyle} style={{fontSize: '10px'}}>Publish year: {book.first_publish_year}</p>
                    </BookInfoStyled>
                </BookCardStyled>
            ))}
            {selectedBook && <Book
                bookKeys={selectedBook}
                isOpen={modalIsOpen}
                handleClose={handleClose}
            />
            }
        </BooksGridStyled>
    );
};

export default Books;