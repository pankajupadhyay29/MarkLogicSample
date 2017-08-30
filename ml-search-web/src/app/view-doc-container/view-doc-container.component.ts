import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';
import { Document } from '../model/models';
import { AppState } from '../store/application-state';
import * as appReducer from '../store/reducers';
import { ActivatedRoute } from '@angular/router';
import { GetDocAction } from '../store/actions';

@Component({
  selector: 'app-view-doc-container',
  templateUrl: './view-doc-container.component.html',
  styleUrls: ['./view-doc-container.component.css']
})
export class ViewDocContainerComponent implements OnInit {
  url$: Observable<string>;
  doc$: Observable<Document>;
  constructor(private store: Store<AppState>, private route: ActivatedRoute) {
    this.url$ = store.select(appReducer.getDocUrl);
    this.doc$ = store.select(appReducer.getDocument);
  }

  ngOnInit() {
    const url = this.route.snapshot.queryParams['url'];
    console.log(url);
    this.store.dispatch(new GetDocAction(url));
  }

}
