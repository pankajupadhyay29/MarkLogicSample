import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewDocContainerComponent } from './view-doc-container.component';

describe('ViewDocContainerComponent', () => {
  let component: ViewDocContainerComponent;
  let fixture: ComponentFixture<ViewDocContainerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewDocContainerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewDocContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  // it('should be created', () => {
  //   expect(component).toBeTruthy();
  // });
});
