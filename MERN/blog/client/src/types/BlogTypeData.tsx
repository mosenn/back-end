export interface blogPostData {
  _id: string;
  cover: string;
  title: string;
  createdAt: number;
  summery: string;
  comments: [];
  author: {
    username: string;
  };
}
