import {MovieDetails, MovieDetailsApiOption} from "./types";

const axios = require('axios');

const options: MovieDetailsApiOption = {
    method: 'GET',
    url: 'https://imdb8.p.rapidapi.com/title/get-overview-details',
    params: {
        tconst: 'tt0944947'
    },
    headers: {
        'content-type': 'application/octet-stream',
        'X-RapidAPI-Key': '6790fd4e5fmshda4defe8241f205p1c78d8jsn6dd8a422c590',
        'X-RapidAPI-Host': 'imdb8.p.rapidapi.com'
    }
};

export async function getMovieDetails(title_key: string): Promise<MovieDetails> {
    try {
        options.params.tconst = title_key;
        const response = await axios.request(options);
        const data: MovieDetails = {
            id: title_key,
            title: response.data.title.title,
            type: response.data.title.titleType,
            image_url: response.data.title.image ? response.data.title.image.url : (response.data.title.parentTitle ? response.data.title.parentTitle.image.url : ''),
            year: response.data.title.year,
            minutes: response.data.title.runningTimeInMinutes,
            genres: response.data.genres,
            release: response.data.releaseDate
        };
        if (response.data.title.seriesStartYear)
            data.series_start = response.data.title.seriesStartYear;
        if (response.data.title.seriesEndYear)
            data.series_end = response.data.title.seriesEndYear;
        if (response.data.title.numberOfEpisodes)
            data.episodes = response.data.title.numberOfEpisodes;
        if (response.data.ratings.rating)
            data.rating = response.data.ratings.rating;
        if (response.data.ratings.ratingCount)
            data.rating_count = response.data.ratings.ratingCount;
        if (response.data.plotSummary)
            data.summary = response.data.plotSummary.text;
        if (response.data.plotOutline)
            data.outline = response.data.plotOutline.text;
        return data;
    } catch (error) {
        console.error(error);
        throw error;
    }
}