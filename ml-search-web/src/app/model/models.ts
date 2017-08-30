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
  id: string;
  owner: User;
  tags: Array<string>;
  comments: Array<Comment>;
  answers: Array<Answer>;
  text: string;
  title: string;
  acceptedAnswerId: string;
}

export interface User {
  id: string;
  userName: string;
  displayName: string;
}

export interface Answer {
  id: string
  text: string;
  owner: User;
}

export interface Comment {
  id: string;
  owner: User;
  text: string;
}
