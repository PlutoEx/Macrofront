/** @jsx jsx */
import { jsx } from "@emotion/react";
import React, { useState } from "react";
import axios from "axios";
import { ContainerStyled, SearchStyle, TextStyle } from "./Moive.styles";
import SelectMenu from "../SelectMenu/selectMenu";
import Input from "../Input";
import Movies from "./Movies";
import { MovieData, SortsOption } from "./types";
import { Option } from "../SelectMenu/types";

const options: Option[] = [
  { value: "any", label: "Any" },
  { value: "title", label: "Title" },
  { value: "new", label: "New" },
  { value: "old", label: "Old" },
];
const MaxMoviesSize: number = 20;

const MovieSearch: React.FC = () => {
  const [inputValue, setInputValue] = useState<string>("");
  const [movies, setMovies] = useState<MovieData[]>([]);
  const [sortOption, setSortOption] = useState<SortsOption>("any");

  const handleSearch = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      const response = await axios.get(
        `https://api.themoviedb.org/3/search/movie?api_key=a5a0dd1c13c6d233edac01e3ca400aa7&query=${inputValue}${"any" != sortOption ? `&sort_by=${sortOption}` : ''}&language=en-US&include_adult=false&include_video=false&page=1&region=US`
      );
      const movieResults = response.data.results
        .filter(
          (movie: any) =>
            movie.poster_path &&
            movie.title &&
            movie.release_date &&
            movie.overview
        )
        .slice(0, MaxMoviesSize)
        .map((movie: any) => ({
          title: movie.title,
          overview: movie.overview,
          release_date: movie.release_date,
          poster_path: `https://image.tmdb.org/t/p/w500${movie.poster_path}`,
        }));
      setMovies(movieResults);
    } catch (error) {
      console.error("My error: " + error);
    }
  };

  const handleInputChange = (event: string): void => {
    const newValue: string = event.toString().toLowerCase();
    setInputValue(newValue);
  };

  const handleSortChange = (event: Option): void => {
    const selectedOption: SortsOption = event.value as SortsOption;
    setSortOption(selectedOption);
  };

  return (
    <ContainerStyled>
      <form onSubmit={handleSearch} id="search-form">
        <div css={SearchStyle}>
          <div>
            <div css={TextStyle}>Search</div>
            <Input
              type="text"
              placeholder={"Enter keyword, title, or release year"}
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
      <Movies movies={movies} />
    </ContainerStyled>
  );
};

export default MovieSearch;
