import { Action } from '@ngrx/store';
import { Query, SearchData, ViewData, ViewJson } from '../model/models';

export const ACTION_TYPES =  {
  START_SEARCH: 'START_SEARCH',
  COMPLETE_SEARCH: 'COMPLETE_SEARCH',
  START_VIEW: 'START_VIEW',
  VIEW_SEARCH: 'VIEW_SEARCH'
};

export class StartSearchAction implements Action {
  readonly type = ACTION_TYPES.START_SEARCH;
  constructor(public query: Query) {}
}

export class CompleteSearchAction implements Action {
  readonly type = ACTION_TYPES.COMPLETE_SEARCH;
  constructor(public searchData: SearchData) {}
}

export class StartViewAction implements Action {
  readonly type = ACTION_TYPES.START_VIEW;
  constructor(public viewJson: ViewJson) {}
}

export class ViewResult implements Action {
  readonly type = ACTION_TYPES.VIEW_SEARCH;
  constructor(public viewData: ViewData) {}
}

export type App_Actions = StartSearchAction | CompleteSearchAction | ViewResult | StartViewAction;
