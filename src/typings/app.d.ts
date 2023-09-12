export interface ArticleType {
  content: {
    text: string;
    html: string;
  };
  slug: string;
  title: string;
  updatedAt: string;
  thumbnail: {
    url: string;
  };
}
