import { Action } from '@ngrx/store';
import { Query, SearchData, Document } from '../model/models';

export const ACTION_TYPES =  {
  START_SEARCH: 'START_SEARCH',
  COMPLETE_SEARCH: 'COMPLETE_SEARCH',
  GET_DOC: 'GET_DOC',
  LOAD_DOC: 'LOAD_DOC'
};

export class StartSearchAction implements Action {
  readonly type = ACTION_TYPES.START_SEARCH;
  constructor(public query: Query) {}
}

export class CompleteSearchAction implements Action {
  readonly type = ACTION_TYPES.COMPLETE_SEARCH;
  constructor(public searchData: SearchData) {}
}

export class GetDocAction implements Action {
  readonly type = ACTION_TYPES.GET_DOC;
  constructor(public url: string) {}
}

export class LoadDocAction implements Action {
  readonly type = ACTION_TYPES.LOAD_DOC;
  constructor(public doc: Document) {}
}

export type App_Actions = StartSearchAction | CompleteSearchAction | GetDocAction | LoadDocAction;
