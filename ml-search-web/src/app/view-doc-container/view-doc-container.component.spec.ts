import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { Store, StoreModule } from '@ngrx/store';
import { ViewDocContainerComponent } from './view-doc-container.component';
import { RouterTestingModule } from '@angular/router/testing';

describe('ViewDocContainerComponent', () => {
  let component: ViewDocContainerComponent;
  let fixture: ComponentFixture<ViewDocContainerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [ RouterTestingModule, StoreModule.forRoot({ }) ],
      declarations: [ ViewDocContainerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewDocContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
