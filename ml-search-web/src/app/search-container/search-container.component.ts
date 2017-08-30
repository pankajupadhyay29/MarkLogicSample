import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Store } from '@ngrx/store';
import { Location } from '@angular/common';
import { Observable } from 'rxjs/Observable';
import { SearchData, SearchResult, Query } from '../model/models';
import { AppState } from '../store/application-state';
import * as appReducer from '../store/reducers';
import { CompleteSearchAction, StartSearchAction } from '../store/actions';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: "app-search-container",
  templateUrl: "./search-container.component.html",
  styleUrls: ["./search-container.component.css"]
})
export class SearchContainerComponent implements OnInit {
  noData$: Observable<any>;
  searchQuery$: Observable<string>;
  searchResults$: Observable<SearchResult[]>;
  searchData$: Observable<SearchData>;
  loading$: Observable<boolean>;
  totalCount$: Observable<number>;
  pageNumber$: Observable<number>;

  constructor(
    private store: Store<AppState>,
    private location: Location,
    private route: ActivatedRoute
  ) {
    this.searchQuery$ = store.select(appReducer.getSearchTerm);
    this.searchResults$ = store.select(appReducer.getSearchResults);
    this.loading$ = store.select(appReducer.getSearchLoading);
    this.totalCount$ = store.select(appReducer.getTotalCount);
    this.pageNumber$ = store.select(appReducer.getPageNumber);
    this.noData$ = store.select(appReducer.noData);
  }

  ngOnInit(): void {
    const query = this.route.snapshot.queryParams["query"];
    const pageNumber = this.route.snapshot.queryParams["pageNumber"];
    if (query) {
      this.onSearch(query, pageNumber);
    }
  }

  onSearch(text, pageNumber = 1) {
    const query: Query = { searchTerm: text, pageNumber };
    this.location.go("/", `query=${text}&pageNumber=${pageNumber}`);
    this.store.dispatch(new StartSearchAction(query));
  }

  onPageChange(event) {
    const newQuery: Query = {
      searchTerm: event.query,
      pageNumber: event.currentPageNumber
    };
    this.location.go(
      "/",
      `query=${event.query}&pageNumber=${event.currentPageNumber}`
    );
    this.store.dispatch(new StartSearchAction(newQuery));
  }
}
