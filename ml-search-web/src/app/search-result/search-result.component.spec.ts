import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { Router, RouterOutlet, RouterModule } from "@angular/router";
import { RouterTestingModule } from '@angular/router/testing';
import { SearchResultComponent } from './search-result.component';

class MockRouter { public navigate() {}; }

describe('SearchResultComponent', () => {
  let component: SearchResultComponent;
  let fixture: ComponentFixture<SearchResultComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [ 
        RouterTestingModule
      ],
      declarations: [ SearchResultComponent ],
      providers: [
        {provide: Router,  useClass: MockRouter },
        RouterOutlet,
        RouterModule
      ],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchResultComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
