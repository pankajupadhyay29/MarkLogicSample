import { Action } from '@ngrx/store';
import { Query, SearchData,Document } from '../model/models';

export const ACTION_TYPES =  {
  GET_DOC: 'GET_DOC',
  LOAD_DOC: 'LOAD_DOC',
};

export class StartSearchAction implements Action {
  readonly type = ACTION_TYPES.GET_DOC;
  constructor(public query: Query) {}
}

export class CompleteSearchAction implements Action {
  readonly type = ACTION_TYPES.LOAD_DOC;
  constructor(public searchData: SearchData) {}
}

export type App_Actions = StartSearchAction | CompleteSearchAction;
