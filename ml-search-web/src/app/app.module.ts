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
import { searchReducer,documentReducer } from './store/reducers';
import { SearchEffects } from './effects/SearchEffect';
import { ViewEffects } from './effects/ViewEffect';
import { SearchContainerComponent } from './search-container/search-container.component';
import { SearchBoxComponent } from './search-box/search-box.component';
import { SearchResultComponent } from './search-result/search-result.component';
import { ViewDocComponent } from './view-doc/view-doc.component';

@NgModule({
  declarations: [
    AppComponent,
    SearchContainerComponent,
    SearchBoxComponent,
    SearchResultComponent,
     PagerComponent,
     ViewDocComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpModule,
    StoreModule.forRoot({search: searchReducer,View: documentReducer}),
    EffectsModule.forRoot([SearchEffects,ViewEffects]),
    RouterModule.forRoot([
      {
        path: '',
        component: SearchContainerComponent
      },
    ]),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
