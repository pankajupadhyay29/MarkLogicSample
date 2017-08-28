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
import { StartViewAction, ACTION_TYPES, ViewResult, App_Actions } from '../store/actions';
import {Router, ActivatedRoute, Params} from '@angular/router';

const SERVICE_URL = 'http://localhost:3000/view';
const PAGE_SIZE = 10;

export const VIEW_DEBOUNCE = new InjectionToken<number>('View Debounce');
export const VIEW_SCHEDULER = new InjectionToken<Scheduler>(
  'Search Scheduler'
);

@Injectable()
export class viewEffects {
    private sub: any;
    url: any;
    @Effect()
  view$: Observable<Action> = this.actions$
    .ofType<StartViewAction>(ACTION_TYPES.START_VIEW)
    .debounceTime(this.debounce, this.scheduler || async)
    .map(action => action.viewJson)
    .switchMap( query => {
     
     // const nextSearch$ = this.actions$.ofType(ACTION_TYPES.START_SEARCH).skip(1);

     this.sub = this.route.params.subscribe(params => {
        this.url = params["url"];
      });
  
      let param1 = this.route.snapshot.queryParams["url"];
  
      const l = "?url=" + param1;   

      const url = `${SERVICE_URL}?url=${l}`;

      console.log("URL from view search : ", url);
      this.http.get(url)
       //.takeUntil(nextSearch$)
       .map((result: any) => {
         const viewData = result.json();
         console.log("search data:" , viewData);

         return new ViewResult({ data: viewData.docs });
       });

    //   return this.http.get(url)
    //   .takeUntil(nextSearch$)
    //   .map((result: any) => {
    //     const searchData = result.json();
    //     console.log("search data:" , searchData);

    //     return new CompleteSearchAction({totalCount: searchData.totalCount, data: searchData.data, query});
    //   })
    //   .catch((err) => {
    //     console.error(err);
    //     return of(new CompleteSearchAction (BLANK_SEARCH_DATA));
    //   });

    });

  constructor(private route: ActivatedRoute,  private actions$: Actions,   private http: Http,   @Optional()  @Inject(VIEW_DEBOUNCE)
    private debounce: number = 300,
    @Optional()
    @Inject(VIEW_SCHEDULER)
    private scheduler: Scheduler
  ) {}
}
