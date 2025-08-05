import axios from "axios";
import { type Movie } from "../types/movie";

export default async function fetchMovies(query: string): Promise<Movie[]> {
  const respons = await axios.get(
    "https://api.themoviedb.org/3/search/movie?include_adult=false&language=en-US&page=1",
    {
      params: {
        query,
        include_adult: false,
        language: "en-US",
        page: 1,
      },
      headers: {
        accept: "application/json",
        Authorization: `Bearer ${import.meta.env.VITE_TMDB_TOKEN}`,
      },
    }
  );

  return respons.data.results as Movie[];
}
