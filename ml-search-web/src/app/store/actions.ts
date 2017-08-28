import { Action } from '@ngrx/store';
import { Query, SearchData } from '../model/models';

export const ACTION_TYPES =  {
  START_SEARCH: 'START_SEARCH',
  COMPLETE_SEARCH: 'COMPLETE_SEARCH',
};

export class StartSearchAction implements Action {
  readonly type = ACTION_TYPES.START_SEARCH;
  constructor(public query: Query) {}
}

export class CompleteSearchAction implements Action {
  readonly type = ACTION_TYPES.COMPLETE_SEARCH;
  constructor(public searchData: SearchData) {}
}

export class ChangePage implements Action {
  readonly type = ACTION_TYPES.COMPLETE_SEARCH;
  constructor(public searchData: SearchData) {}
}

export type App_Actions = StartSearchAction | CompleteSearchAction;
