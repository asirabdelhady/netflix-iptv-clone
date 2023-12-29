export interface MovieInterface {
  id: string;
  title: string;
  description: string;
  thumbnailUrl: string;
  videoUrl: string;
  duration: string;
  genre: string;
}

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
