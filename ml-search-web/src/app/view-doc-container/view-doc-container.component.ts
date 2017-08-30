import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';
import { Document, Answer, User } from "../model/models";
import { AppState } from '../store/application-state';
import * as appReducer from '../store/reducers';
import { ActivatedRoute } from '@angular/router';
import { GetDocAction } from '../store/actions';

@Component({
  selector: "app-view-doc-container",
  templateUrl: "./view-doc-container.component.html",
  styleUrls: ["./view-doc-container.component.css"]
})
export class ViewDocContainerComponent implements OnInit {
  hasAnswers$: Observable<any>;
  hasComments$: Observable<any>;
  text: any;
  title: any;
  owner: any;
  comments$: Observable<any>;
  ansId: any;
  answers$: Observable<any>;
  url$: Observable<string>;
  doc$: Observable<Document>;
  constructor(private store: Store<AppState>, private route: ActivatedRoute) {
    this.url$ = store.select(appReducer.getDocUrl);
    this.doc$ = store.select(appReducer.getDocument);
    this.answers$ = store.select(appReducer.getAnswers);
    this.ansId = store.select(appReducer.getAnswerId);
    this.comments$ = store.select(appReducer.getComments);
    this.owner = store.select(appReducer.getOwner);
    this.title = store.select(appReducer.getTitle);
    this.text = store.select(appReducer.getText);
    this.hasAnswers$ = store.select(appReducer.hasAnswers);
    this.hasComments$ = store.select(appReducer.hasComments);
  }

  ngOnInit() {
    const url = this.route.snapshot.queryParams["url"];
    this.store.dispatch(new GetDocAction(url));
  }
}
