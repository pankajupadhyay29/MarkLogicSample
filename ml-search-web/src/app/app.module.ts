import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { PagerComponent } from './pager/pager.component';


import { AppComponent } from './app.component';
import { searchReducer, viewDocReducer } from './store/reducers';
import { SearchEffects } from './effects/SearchEffect';
import { ViewDocEffect } from './effects/ViewDocEffect';
import { SearchContainerComponent } from './search-container/search-container.component';
import { SearchBoxComponent } from './search-box/search-box.component';
import { SearchResultComponent } from './search-result/search-result.component';
import { ViewDocContainerComponent } from './view-doc-container/view-doc-container.component';
import { CommentsComponent } from './comments/comments.component';
import { AnswerComponent } from './answer/answer.component';
import { UserDetailsComponent } from './user-details/user-details.component';
import { QuestionComponent } from './question/question.component';
import { HighlightTextPipe } from './highlight-text.pipe';

@NgModule({
  declarations: [
    AppComponent,
    SearchContainerComponent,
    SearchBoxComponent,
    SearchResultComponent,
     PagerComponent,
     ViewDocContainerComponent,
     CommentsComponent,
     AnswerComponent,
     UserDetailsComponent,
     QuestionComponent,
     HighlightTextPipe
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpModule,
    StoreModule.forRoot({search: searchReducer, view_doc: viewDocReducer}),
    EffectsModule.forRoot([SearchEffects, ViewDocEffect]),
    RouterModule.forRoot([
      {
        path: '',
        component: SearchContainerComponent
      },
      {
        path: 'view',
        component: ViewDocContainerComponent
      },
    ]),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
