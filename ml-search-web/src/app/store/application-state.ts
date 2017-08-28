import { SearchResult, Query, SearchData, ViewData } from '../model/models';
export interface AppState {
  search: SearchState;
}

export interface SearchState {
  searchQuery: Query;
  searchData: SearchData;
  isSearching: boolean;
}

export interface viewState {
  viewData: ViewData;
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

export const INITIAL_STATE: AppState = {
  search: INITIAL_SEARCH_STATE
};
