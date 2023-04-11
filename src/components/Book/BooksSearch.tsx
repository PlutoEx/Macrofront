/** @jsx jsx */
import {jsx, css} from "@emotion/react";
import React, {useState} from 'react';
import axios from "axios";
import {ContainerStyled, TextStyle} from "./Book.styles";
import SelectMenu, {Option} from "../SelectMenu/selectMenu";
import Input from "../Input";
import Books, {BookData} from "./Books";

const options: Option[] = [
    {value: "any", label: "Any"},
    {value: "title", label: "Title"},
    {value: "new", label: "New"},
    {value: "old", label: "Old"},
];
const MaxBooksSize: number = 20;
type SortsOption = "any" | "title" | "new" | "old";

const BooksSearch: React.FC = () => {
    const [inputValue, setInputValue] = useState<string>('');
    const [books, setBooks] = useState<BookData[]>([]);
    const [sortOption, setSortOption] = useState<SortsOption>("any");

    const handleSearch = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        try {
            const response = await axios.get(`https://openlibrary.org/search.json?q=${inputValue}${"any" != sortOption ? `&sort=${sortOption}` : ''}&limit=${MaxBooksSize}`);
            const booksResults = response.data.docs.filter(
                (book: any) =>
                    book.key &&
                    book.cover_i &&
                    book.title &&
                    book.author_name &&
                    book.first_publish_year &&
                    book.publisher &&
                    book.isbn
            ).slice(0, MaxBooksSize);
            setBooks(booksResults);
            // setBooks(response.data.docs);  // without filter
        } catch (error) {
            console.log(error);
        }
    };

    const handleInputChange = (event: string) => {
        const newValue = event.toString().toLowerCase();
        setInputValue(newValue);
    };

    const handleSortChange = (event: Option) => {
        const selectedOption = event.value as SortsOption;
        setSortOption(selectedOption);
    };

    return (
        <ContainerStyled>
            <form onSubmit={handleSearch} style={{display: 'inline-block'}}>
                <div style={{
                    display: 'flex',
                    alignItems: 'center'
                }}>
                    <div>
                        <div css={TextStyle}>Search</div>
                        <Input
                            type="text"
                            placeholder={'Enter keyword, title, author'}
                            onChange={handleInputChange}
                        />
                    </div>
                    <div>
                        <div css={TextStyle}>Sort by</div>
                        <SelectMenu
                            options={options}
                            onChange={handleSortChange}
                        />
                    </div>
                </div>
            </form>
            <Books books={books}/>
        </ContainerStyled>
    );
};

export default BooksSearch;