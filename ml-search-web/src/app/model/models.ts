export class SearchResult {
  url: string;
  text: string;
}

export class ViewJson {
  answers: string;
  accepted_ans_id: number;
  user_name: string;
  comments = [];
  ans = [];
  title: any;
  com: any;
  docs: any;
  doc: any[];
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

export interface ViewData {
  data: Array<ViewJson>;
}