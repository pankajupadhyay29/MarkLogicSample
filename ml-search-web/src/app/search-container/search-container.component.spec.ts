import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { SearchContainerComponent } from './search-container.component';
import { SearchBoxComponent } from '../search-box/search-box.component';
import { SearchResultComponent } from '../search-result/search-result.component';
import { PagerComponent } from '../pager/pager.component';
import { RouterTestingModule } from '@angular/router/testing';
import { Store, StoreModule } from '@ngrx/store';

describe('SearchContainerComponent', () => {
  let component: SearchContainerComponent;
  let fixture: ComponentFixture<SearchContainerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [ FormsModule, RouterTestingModule, StoreModule.forRoot({ }) ],
      declarations: [ 
        SearchContainerComponent,
        SearchBoxComponent,
        SearchResultComponent,
        PagerComponent
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
