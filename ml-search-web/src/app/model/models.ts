export class SearchResult {
  url: string;
  text: string;
}

export interface Query {
  searchTerm: string;
  pageNumber: number;
}

export interface SearchData {
  query: Query;
  totalCount: number;
  data: Array<SearchResult>;
}

export interface Document {
  id: number;
  owner: User;
  tags: Array<string>;
  comments: Array<Comment>;
  answers: Array<Answer>;
  text: string;
  title: string;
  acceptedAnswerId: number;
}

export interface User {
  id: number;
  userName: string;
  displayName: string;
}

export interface Answer {
  text: string;
  owner: User;
}

export interface Comment {
  id: number;
  owner: User;
  text: string;
}
