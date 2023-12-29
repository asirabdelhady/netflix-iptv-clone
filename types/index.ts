import { StringChain } from "lodash";

// export interface MovieInterface {
//   id: string;
//   title: string;
//   description: string;
//   stream_icon: string;
//   videoUrl: string;
//   duration: string;
//   genre: string;
// }

export interface Category {
  category_id: string;
  category_name: string;
  parent_id: number;
}


export interface Movie {
  id: string;
  title: string;
  category_id: string;
  category_name: string;
}

export interface MovieInterface{
  id: string;
  num: string;
  name: string;
  series_id: string;
  cover: string;
  plot: string;
  cast: string;
  director: string;
  genre: string;
  releaseDate: string;
  last_modified: string;
  rating: string;
  rating_5based: string;
  backdrop_path: StringChain;
  youtube_trailer: string;
  episode_run_time: string;
  category_id: string;
}