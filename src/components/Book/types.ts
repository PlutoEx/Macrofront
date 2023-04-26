export interface BookProps {
    bookKeys: string[];
    bookCoverId: number;
    isOpen: boolean;
    handleClose: () => void;
}

export interface BookInfo {
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

export type CustomType = {
    name: string;
    key: string;
}

export type SortsOption = "any" | "title" | "new" | "old";

export interface BookData {
    key: string;
    title: string;
    author_name: string[];
    cover_i: number;
    first_publish_year: number;
    publisher?: string[];
    isbn: string[];
}

export interface BooksProps {
    books: BookData[];
}