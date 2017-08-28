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
import { searchReducer } from './store/reducers';
import { SearchEffects } from './effects/SearchEffect';
import { SearchContainerComponent } from './search-container/search-container.component';
import { SearchBoxComponent } from './search-box/search-box.component';
import { SearchResultComponent } from './search-result/search-result.component';

@NgModule({
  declarations: [
    AppComponent,
    SearchContainerComponent,
    SearchBoxComponent,
    SearchResultComponent,
     PagerComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpModule,
    StoreModule.forRoot({search: searchReducer}),
    EffectsModule.forRoot([SearchEffects]),
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
