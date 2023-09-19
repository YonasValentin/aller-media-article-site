export interface Article {
  id: number;
  imageUrl: string;
  title: string;
  category: string;
  link: string;
  video: boolean;
}

export interface ArticlesResponse {
  record: {
    articles: Article[];
  };
}

export interface Ad {
  id: number;
  imageUrl: string;
  link: string;
  text: string;
  cta: string;
}

export interface AdResponse {
  record: {
    ads: Ad[];
  };
}
