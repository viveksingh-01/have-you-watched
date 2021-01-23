export interface IMovieDetail {
  id: number;
  adult: boolean;
  backdrop_path: string;
  budget: number;
  genres: { id: number; name: string }[];
  release_date: string;
  revenue: number;
  runtime: number;
  original_language: string;
  original_title: string;
  overview: string;
  popularity: number;
  poster_path: string;
  status: string;
  tagline: string;
  title: string;
  vote_average: number;
  vote_count: number;
}
