import {MovieCredits, MovieDataFull, MovieDetails} from "./types";
import {getMovieDetails} from "./getMovieDetails";
import {getMovieCredits} from "./getMovieCredits";

export async function getDetails(title_key: string): Promise<MovieDataFull> {
    let details: MovieDetails = await getMovieDetails(title_key);
    let credits: MovieCredits = await getMovieCredits(title_key);
    let data = {...details, ...credits};
    console.log("GET ", data);
    return data;
}