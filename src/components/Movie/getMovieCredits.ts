import {MovieCredits, MovieDetailsApiOption} from "./types";

const axios = require('axios');
const MaxCast: number = 5;

const options: MovieDetailsApiOption = {
    method: 'GET',
    url: 'https://imdb8.p.rapidapi.com/title/get-full-credits',
    params: {
        tconst: 'tt0944947'
    },
    headers: {
        'content-type': 'application/octet-stream',
        'X-RapidAPI-Key': '6790fd4e5fmshda4defe8241f205p1c78d8jsn6dd8a422c590',
        'X-RapidAPI-Host': 'imdb8.p.rapidapi.com'
    }
};

export async function getMovieCredits(title_key: string): Promise<MovieCredits> {
    try {
        options.params.tconst = title_key;
        const response = await axios.request(options);
        console.log(response.data)
        const data: MovieCredits = {
            cast: response.data.cast.map((cast: { name: string; }) => cast.name).slice(0, MaxCast),
            director: response.data.crew.director.map((dir : {name: string;}) => dir.name).slice(0, MaxCast),
        };
        if (response.data.crew.producer)
            data.producer = response.data.crew.producer.map((prod : {name: string}) => prod.name);
        if (response.data.crew.writer)
            data.writer = response.data.crew.writer.map((wr : {name: string}) => wr.name);
        return data;
    } catch (error) {
        console.error(error);
        throw error;
    }
}