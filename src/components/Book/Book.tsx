import React, {useState, useEffect} from "react";
import axios from "axios";
import Modal from "react-modal";
import {ModalContentStyles, ModalStyles, scrollbarStyle, TextStyle} from "./Book.styles";
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faTimes} from '@fortawesome/free-solid-svg-icons';
import {css} from "@emotion/react";
import styled from "@emotion/styled";

interface BookProps {
    bookKeys: string[];
    isOpen: boolean;
    handleClose: () => void;
}

interface BookInfo {
    title: string;
    authors: string[] | null;
    coverUrl: string | null;
    urlLink: string | null;
    description: string | null;
    firstPublishedYear: string;
    publishers: string[] | null;
    languages: string[] | null;
    weight: string | null;
    sub_title: string | null;
    full_title: string | null;
    pages: string | null;
    created: string | null;
    last_modified: string | null;
}

const Book: React.FC<BookProps> = ({bookKeys, isOpen, handleClose}) => {
    bookKeys[0] = bookKeys[0].replace('/works/', '');
    const [bookInfo, setBookInfo] = useState<BookInfo>({
        created: "Default",
        full_title: "Default",
        languages: ["Default"],
        last_modified: "Default",
        pages: "Default",
        sub_title: "Default",
        weight: "Default",
        title: "Default",
        authors: ['Default'],
        coverUrl: "Default",
        description: "Default",
        firstPublishedYear: "Default",
        publishers: ["Default"],
        urlLink: "Default",
    });

    useEffect(() => {
        const fetchBookInfo = async () => {
            try {
                // const response = await axios.get(`http://openlibrary.org/works/${bookKeys[0]}.json`);  Low details
                const response = await axios.get(`https://openlibrary.org/api/books?bibkeys=ISBN:${bookKeys[1]}&jscmd=details&format=json`);
                const bookData = response.data[`ISBN:${bookKeys[1]}`];
                console.log(bookData.details)
                setBookInfo({
                    authors: bookData.details.authors ? bookData.details.authors.map((author: any) => author.name) : null,
                    coverUrl: bookData.details.covers ? `https://covers.openlibrary.org/b/id/${bookData.details.covers[0]}-L.jpg` : null,
                    created: bookData.details.created.value || null,
                    description: bookData.details.description || null,
                    firstPublishedYear: bookData.details.publish_date,
                    full_title: bookData.details.full_title || null,
                    languages: bookData.details.languages ? bookData.details.languages.map((lang: any) => lang.key) : null,
                    last_modified: bookData.details.last_modified.value || null,
                    pages: bookData.details.pagination || null,
                    publishers: bookData.details.publishers || null,
                    sub_title: bookData.details.subtitle || null,
                    title: bookData.details.title,
                    urlLink: bookData.info_url || null,
                    weight: bookData.details.weight || null
                });
            } catch (error) {
                console.error(error);
            }
        };
        fetchBookInfo();
    }, [bookKeys]);

    const customStyles = {
        overlay: {
            backgroundColor: 'rgba(0, 0, 0, 0.75)'
        },
        content: {
            backgroundColor: '#333',
            border: 'none',
            borderRadius: '10px',
            padding: '20px',
            color: 'white',
            width: '50%',
            height: '75%',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            boxShadow: '0px 0px 10px 0px rgba(0,0,0,0.75)',
        }
    };

    return (
        <Modal
            isOpen={isOpen}
            onRequestClose={handleClose}
            contentLabel={bookInfo.title}
            ariaHideApp={false}
            style={customStyles}
        >
            <h2 style={{fontFamily: "Russo One"}}>{bookInfo.title}</h2>
            <div style={{display: "flex", alignItems: "center", margin: "20px 0"}}>
                {bookInfo.coverUrl && (
                    <img
                        src={bookInfo["coverUrl"]}
                        alt={`Cover for ${bookInfo.title}`}
                        style={{marginRight: "20px",
                            maxHeight: '400px'}}
                    />
                )}
                <div>
                    {bookInfo.sub_title && <p style={TextStyle}>{bookInfo["sub_title"]}</p>}
                    {bookInfo.full_title && <p style={TextStyle}>{bookInfo["full_title"]}</p>}
                    {bookInfo.authors && (
                        <p style={TextStyle}>Author(s): {bookInfo["authors"].join(", ")}</p>
                    )}
                    {bookInfo.firstPublishedYear && (
                        <p style={TextStyle}>First Published: {bookInfo.firstPublishedYear}</p>
                    )}
                    {bookInfo.publishers && (
                        <p style={TextStyle}>
                            Publisher(s): {bookInfo["publishers"].join(", ")}
                        </p>
                    )}
                    {bookInfo.languages && (
                        <p style={TextStyle}>Language(s): {bookInfo["languages"].join(", ")}</p>
                    )}
                    {bookInfo.weight && <p style={TextStyle}>Weight: {bookInfo["weight"]}</p>}
                    {bookInfo.pages && <p style={TextStyle}>Pages: {bookInfo["pages"]}</p>}
                    {bookInfo.created && (
                        <p style={TextStyle}>
                            Created: {new Date(bookInfo["created"]).toLocaleDateString()}
                        </p>
                    )}
                    {bookInfo.last_modified && (
                        <p style={TextStyle}>
                            Last Modified: {new Date(bookInfo["last_modified"]).toLocaleDateString()}
                        </p>
                    )}
                    {bookInfo.description && <p style={{marginTop: "20px"}}>{bookInfo["description"]}</p>}
                    {bookInfo.urlLink && (
                        <a href={bookInfo["urlLink"]} target="_blank" rel="noopener noreferrer">
                            More Info
                        </a>
                    )}
                </div>
            </div>
            <button onClick={handleClose} style={{
                all: "unset",
                backgroundColor: "#333",
                position: "absolute",
                top: 0,
                right: '5px',
            }}>
                <FontAwesomeIcon icon={faTimes} size="2x" color="#ff0000"/>
            </button>
        </Modal>
    );
};

export default Book;