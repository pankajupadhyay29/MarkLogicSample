import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';
import { SearchData, SearchResult, Query } from '../model/models';
import { AppState } from '../store/application-state';
import * as appReducer from '../store/reducers';
import { CompleteSearchAction, StartSearchAction } from '../store/actions';

@Component({
  selector: 'app-search-container',
  templateUrl: './search-container.component.html',
  styleUrls: ['./search-container.component.css']
})
export class SearchContainerComponent implements OnInit {
  searchQuery$: Observable<string>;
  searchResults$: Observable<SearchResult[]>;
  searchData$: Observable<SearchData>;
  loading$: Observable<boolean>;
  totalCount$: Observable<number>;
  pageNumber$: Observable<number>;  

  constructor(private store: Store<AppState>) {
    this.searchQuery$ = store.select(appReducer.getSearchTerm);
    this.searchResults$ = store.select(appReducer.getSearchResults);
    this.loading$ = store.select(appReducer.getSearchLoading);
    this.totalCount$ = store.select(appReducer.getTotalCount);
    this.pageNumber$ = store.select(appReducer.getPageNumber);
  }

  ngOnInit(): void {

  }

  onSearch(text) {
    const query: Query = {searchTerm: text, pageNumber: 1};
    this.store.dispatch(new StartSearchAction(query));
  }
  
  onPageChange(event) { 
    const newQuery: Query = {searchTerm: event.query , pageNumber: event.currentPageNumber};
    this.store.dispatch(new StartSearchAction(newQuery));
   }
}
