import { ActionReducerMap } from '@ngrx/store';
import { INITIAL_SEARCH_STATE, AppState, SearchState, viewState } from './application-state';
import { App_Actions, ACTION_TYPES, StartSearchAction } from './actions';
import { SearchData, ViewData } from '../model/models';

export function searchReducer(state: SearchState = INITIAL_SEARCH_STATE, action): SearchState {
  switch (action.type) {
    case ACTION_TYPES.START_SEARCH:
      return Object.assign({}, state, { isSearching: true, searchQuery: action.query});

    case ACTION_TYPES.COMPLETE_SEARCH:
      return Object.assign({}, state, {isSearching: false, searchData: action.searchData});

    default:
      return state;
  }
}

export function viewReducer(state: viewState, action): viewState {
  switch (action.type) {
    case ACTION_TYPES.START_VIEW:
      return Object.assign({}, state, { viewData: action.viewData});

    case ACTION_TYPES.VIEW_SEARCH:
      return Object.assign({}, state, {viewData: action.viewData});

    default:
      return state;
  }
}

export const getViewData = (state: AppState) => state.search.searchQuery.searchTerm;

export const getSearchTerm = (state: AppState) => state.search.searchQuery.searchTerm;

export const getPageNumber = (state: AppState) => state.search.searchQuery.pageNumber;

export const getSearchResults = (state: AppState) => state.search.searchData.data;

export const getSearchLoading = (state: AppState) => state.search.isSearching;
