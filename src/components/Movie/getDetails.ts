import {MovieDataFull, MovieDetails} from "./types";
import {getMovieDetails} from "./getMovieDetails";

export async function getDetails(title_key: string): Promise<MovieDetails> {
    let details: MovieDetails = await getMovieDetails(title_key);
    console.log(details)
    return details;
}