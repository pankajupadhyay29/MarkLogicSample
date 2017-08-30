import { ActionReducerMap } from '@ngrx/store';
import { INITIAL_SEARCH_STATE, AppState, SearchState, ViewDocumentState, INITIAL_VIEW_DOC_STATE } from './application-state';
import { App_Actions, ACTION_TYPES, StartSearchAction } from './actions';
import { SearchData, Document } from '../model/models';

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

export function viewDocReducer(state: ViewDocumentState = INITIAL_VIEW_DOC_STATE, action): ViewDocumentState {
  switch (action.type) {
    case ACTION_TYPES.GET_DOC:
      return Object.assign({}, state, {url: action.url});

    case ACTION_TYPES.LOAD_DOC:
      return Object.assign({}, state, {doc: action.doc});

    default:
      return state;
  }
}

export const getSearchTerm = (state: AppState) => state.search.searchQuery.searchTerm;

export const getPageNumber = (state: AppState) => state.search.searchQuery.pageNumber;

export const getSearchResults = (state: AppState) => state.search.searchData.data;

export const getSearchLoading = (state: AppState) => state.search.isSearching;

export const getTotalCount = (state: AppState) => state.search.searchData.totalCount;

export const getDocUrl = (state: AppState) => state.view_doc.url;

export const getDocument = (state: AppState) => state.view_doc.doc;

export const getAnswers = (state: AppState) => state.view_doc.doc.answers;

export const getAnswerId = (state: AppState) => state.view_doc.doc.acceptedAnswerId;

export const getComments = (state: AppState) => state.view_doc.doc.comments;

export const getTitle = (state: AppState) => state.view_doc.doc.title;

export const getOwner = (state: AppState) => state.view_doc.doc.owner;

export const getText = (state: AppState) => state.view_doc.doc.text;

export const hasComments = (state: AppState) => state.view_doc.doc.comments.length > 0;

export const hasAnswers = (state: AppState) => state.view_doc.doc.answers.length > 0;

export const noData = (state: AppState) => (!state.search.isSearching 
  && state.search.searchQuery.searchTerm.length > 0 
  && state.search.searchData.totalCount == 0);
