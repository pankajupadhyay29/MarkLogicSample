import { Injectable, InjectionToken, Optional, Inject } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { Effect, Actions } from '@ngrx/effects';
import { Action } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/switchMap';
import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/skip';
import 'rxjs/add/operator/takeUntil';
import { Scheduler } from 'rxjs/Scheduler';
import { async } from 'rxjs/scheduler/async';
import { empty } from 'rxjs/observable/empty';
import { of } from 'rxjs/observable/of';
import { StartSearchAction, ACTION_TYPES, CompleteSearchAction, App_Actions } from '../store/actions';
import { Query, SearchData } from '../model/models';
import { BLANK_SEARCH_DATA } from '../store/application-state';
import { environment } from '../../environments/environment';

const SERVICE_URL = `${environment.serviceBaseURL}/search`;
const PAGE_SIZE = 10;

export const SEARCH_DEBOUNCE = new InjectionToken<number>('Search Debounce');
export const SEARCH_SCHEDULER = new InjectionToken<Scheduler>(
  'Search Scheduler'
);

@Injectable()
export class SearchEffects {
  @Effect()
  search$: Observable<Action> = this.actions$
    .ofType<StartSearchAction>(ACTION_TYPES.START_SEARCH)
    .debounceTime(this.debounce, this.scheduler || async)
    .map(action => action.query)
    .switchMap(query => {
      if (query.searchTerm === '') {
        return empty();
      }

      const nextSearch$ = this.actions$.ofType(ACTION_TYPES.START_SEARCH).skip(1);

      const url = `${SERVICE_URL}?text=${query.searchTerm}&pageNumber=${query.pageNumber}&pageSize=${PAGE_SIZE}`;

      return this.http.get(url)
        .takeUntil(nextSearch$)
        .map((result: any) => {
          const searchData = result.json();

          return new CompleteSearchAction({totalCount: searchData.totalCount, data: searchData.data, query});
        })
        .catch((err) => {
          console.error(err);
          return of(new CompleteSearchAction (BLANK_SEARCH_DATA));
        });
    });

  constructor(
    private actions$: Actions,
    private http: Http,
    @Optional()
    @Inject(SEARCH_DEBOUNCE)
    private debounce: number = 300,
    @Optional()
    @Inject(SEARCH_SCHEDULER)
    private scheduler: Scheduler
  ) {}
}
