import { SearchResult, Query, SearchData, Document, Answer } from '../model/models';
export interface AppState {
  search: SearchState;
  view_doc: ViewDocumentState;
}

export interface ViewDocumentState {
  url: string;
  doc: Document;
}

export interface SearchState {
  searchQuery: Query;
  searchData: SearchData;
  isSearching: boolean;
}

export const BLANK_QUERY: Query = {
  searchTerm: '',
  pageNumber: 1,
};

export const BLANK_SEARCH_DATA = {
  query: BLANK_QUERY,
  totalCount: 0,
  data: []
};

export const INITIAL_SEARCH_STATE = {
  searchQuery: BLANK_QUERY,
  searchData: BLANK_SEARCH_DATA,
  isSearching: false
};

export const EMPTY_DOC: Document = {
   id: 0,
   acceptedAnswerId: 0,
   text: '',
   owner: { userName: '', displayName: '', id: 0 },
   comments: [],
   answers: [],
   tags: [],
   title: ''
};

export const INITIAL_VIEW_DOC_STATE = {
  url: '',
  doc: EMPTY_DOC
};

export const INITIAL_STATE: AppState = {
  search: INITIAL_SEARCH_STATE,
  view_doc: INITIAL_VIEW_DOC_STATE
};
