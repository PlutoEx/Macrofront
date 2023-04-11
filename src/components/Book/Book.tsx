/** @jsx jsx */
import {jsx, css} from "@emotion/react";
import React, {useState, useEffect} from "react";
import axios from "axios";
import Modal from "react-modal";
import {CardStyle, ExitButtonStyle, ImgStyle, ModalStyles} from "./Book.styles";
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faTimes} from '@fortawesome/free-solid-svg-icons';

interface BookProps {
    bookKeys: string[];
    bookCoverId: number;
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

async function getBookData(bookKeys: string[]) {
    // That have low details, but almost always have cover_id
    const response1 = await axios.get(`http://openlibrary.org/works/${bookKeys[0]}.json`);
    // More details
    const response2 = await axios.get(`https://openlibrary.org/api/books?bibkeys=ISBN:${bookKeys[1]}&jscmd=details&format=json`);
    const bookData1 = response1.data;
    const bookData2 = response2.data[`ISBN:${bookKeys[1]}`];
    return [bookData1, bookData2];
}

type CustomType = {
    name: string;
    key: string;
}

const Book: React.FC<BookProps> = ({bookKeys, bookCoverId, isOpen, handleClose}) => {
    bookKeys[0] = bookKeys[0].replace('/works/', '');
    const [bookInfo, setBookInfo] = useState<BookInfo>({
        authors: [],
        coverUrl: null,
        created: null,
        description: null,
        firstPublishedYear: "Default",
        full_title: null,
        languages: null,
        last_modified: null,
        pages: null,
        publishers: null,
        sub_title: null,
        title: "Default",
        urlLink: null,
        weight: null,
    });

    useEffect(() => {
        const fetchBookInfo = async () => {
            try {
                // bookData1 can be needed later
                let [bookData1, bookData2] = await getBookData(bookKeys);
                // console.log(bookData1);
                // console.log(bookData2);
                setBookInfo({
                    authors: bookData2.details.authors ? bookData2.details.authors.map((author: CustomType) => author.name) : null,
                    // coverUrl: bookData2.details.covers ? `https://covers.openlibrary.org/b/id/${bookData2.details.covers[0]}-M.jpg` :
                        // (bookData1.covers ? `https://covers.openlibrary.org/b/id/${bookData1.covers[0]}-M.jpg`: null),
                    coverUrl: `https://covers.openlibrary.org/b/id/${bookCoverId}-L.jpg`,
                    created: bookData2.details.created ? bookData2.details.created.value : null,
                    description: bookData2.details.description ? bookData2.details.description.value : null,
                    firstPublishedYear: bookData2.details.publish_date,
                    full_title: bookData2.details.full_title,
                    languages: bookData2.details.languages ? bookData2.details.languages.map((lang: CustomType) => lang.key.replace('/languages/', '')) : null,
                    last_modified: bookData2.details.last_modified ? bookData2.details.last_modified.value : null,
                    pages: bookData2.details.pagination,
                    publishers: bookData2.details.publishers,
                    sub_title: bookData2.details.subtitle,
                    title: bookData2.details.title,
                    urlLink: bookData2.info_url,
                    weight: bookData2.details.weight
                });
            } catch (error) {
                console.error(error);
            }
        };
        fetchBookInfo().then(r => r);
    }, [bookKeys]);

    return (
        <Modal
            isOpen={isOpen}
            onRequestClose={handleClose}
            contentLabel={bookInfo.title}
            ariaHideApp={false}
            style={ModalStyles}
        >
            <h2>{bookInfo.title}</h2>
            <div css={CardStyle}>
                {bookInfo.coverUrl && (
                    <img
                        src={bookInfo["coverUrl"]}
                        alt={`Cover for ${bookInfo.title}`}
                        css={ImgStyle}
                    />
                )}
                <div>
                    {bookInfo.sub_title && <p>{bookInfo["sub_title"]}</p>}
                    {bookInfo.full_title && <p>{bookInfo["full_title"]}</p>}
                    {bookInfo.authors && (
                        <p>Author(s): {bookInfo["authors"].join(", ")}</p>
                    )}
                    {bookInfo.firstPublishedYear && (
                        <p>First Published: {bookInfo.firstPublishedYear}</p>
                    )}
                    {bookInfo.publishers && (
                        <p>Publisher(s): {bookInfo["publishers"].join(", ")}</p>
                    )}
                    {bookInfo.languages && (
                        <p>Language(s): {bookInfo["languages"].join(", ")}</p>
                    )}
                    {bookInfo.weight && <p>Weight: {bookInfo["weight"]}</p>}
                    {bookInfo.pages && <p>Pages: {bookInfo["pages"]}</p>}
                    {bookInfo.created && (
                        <p>Created: {new Date(bookInfo["created"]).toLocaleDateString()}</p>
                    )}
                    {bookInfo.last_modified && (
                        <p>Last Modified: {new Date(bookInfo["last_modified"]).toLocaleDateString()}</p>
                    )}
                    {bookInfo.description && <p>{bookInfo["description"]}</p>}
                    {bookInfo.urlLink && (
                        <a href={bookInfo["urlLink"]} target="_blank" rel="noopener noreferrer">
                            More Info
                        </a>
                    )}
                </div>
            </div>
            <button onClick={handleClose} css={ExitButtonStyle}>
                <FontAwesomeIcon icon={faTimes} size="2x" color="#ff0000"/>
            </button>
        </Modal>
    );
};

export default Book;