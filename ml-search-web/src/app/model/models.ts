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
