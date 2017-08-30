import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PagerComponent } from './pager.component';

describe('PagerComponent', () => {
  let component: PagerComponent;
  let fixture: ComponentFixture<PagerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PagerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PagerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });

  describe('getPagesList', () => {
    it('should return empty page list if totalCount is 0', () => {
      component.totalCount = 20;

      expect(component.getPagesList().length).toEqual(0);
    });

    it('should get page list 1', () => {
      component.totalCount = 20;
      component.maxRecordInPage = 10;
      component.SetSize = 3;
      component.CurrentSet = 1;
      component.currentPage = 1;   
      const expectedOutput = [];

      expect((component.getPagesList())).toEqual(expectedOutput);
    });
  });

  describe('isFirstSet', () => {
    it('should return false if current set is 0', () => {
      component.CurrentSet = 1;

      expect(component.isFirstSet()).toEqual(false);
    });
    it('should return true if current set is not 0', () => {
      component.CurrentSet = 0;

      expect(component.isFirstSet()).toEqual(true);
    });    
  });

  describe('totalPageCount', () => {
    it('should return total page count', () => {
      component.totalCount = 10;
      component.maxRecordInPage = 2;
      const expectedOutput = 5;

      expect(component.totalPageCount()).toEqual(expectedOutput);
    });
     
  });

  describe('isLastSet', () => {
    it('should return false if set is last ', () => {
      component.totalCount = 20;
      component.maxRecordInPage = 2;
      component.SetSize = 2;
      component.CurrentSet = 3;

      expect(component.isLastSet()).toEqual(false);
    });

    it('should return true if set is last ', () => {
      component.totalCount = 20;
      component.maxRecordInPage = 2;
      component.SetSize = 2;
      component.CurrentSet = 5;

      expect(component.isLastSet()).toEqual(true);
    });   
  });

   describe('next', () => {
     describe('if on last set', () => {
      it('should not increment current set', () => {
        component.CurrentSet = 1;
        spyOn(component, 'isLastSet').and.returnValue(true);
        component.nextSet();

        expect(component.CurrentSet).toEqual(1);
      });

      it('should not set pages collection to with page list', () => {
        component.pagesArray = [];
        spyOn(component, 'isLastSet').and.returnValue(true);
        spyOn(component, 'getPagesList').and.returnValue(['Java']);
        component.nextSet();

        expect(component.pagesArray).toEqual([]);
      });      
    });
 
    describe('if not on last set', () => {
      it('should  increment current set', () => {
        component.CurrentSet = 1;
        spyOn(component, 'isLastSet').and.returnValue(false);
        component.nextSet();

        expect(component.CurrentSet).toEqual(2);
      });

      it('should set pages collection with page list', () => {
        component.pagesArray = [];
        spyOn(component, 'isLastSet').and.returnValue(false);
        spyOn(component, 'getPagesList').and.returnValue(['Java']);
        component.nextSet();

        expect(component.pagesArray).toEqual(['Java']);
      });
    });       
    
  });

  describe('previous', () => {
    describe('if on first set', () => {
      beforeEach(() => {
        spyOn(component, 'isFirstSet').and.returnValue(true);
      });

      it('should not decrement current set', () => {
        component.CurrentSet = 1;
        component.previousSet();

        expect(component.CurrentSet).toEqual(1);
      });

      it('should not set pages collection to with page list', () => {
        component.pagesArray = [];
        spyOn(component, 'getPagesList').and.returnValue(['Java']);
        component.previousSet();

        expect(component.pagesArray).toEqual([]);
      });
    });
  
    describe('if not on first set', () => {
      it('should decrement current set', () => {
        component.CurrentSet = 1;
        spyOn(component, 'isFirstSet').and.returnValue(false);
        component.previousSet();

        expect(component.CurrentSet).toEqual(0);
      });

      it('should set pages collection with page list', () => {
        component.pagesArray = [];
        spyOn(component, 'isFirstSet').and.returnValue(false);
        spyOn(component, 'getPagesList').and.returnValue(['Java']);
        component.previousSet();

        expect(component.pagesArray).toEqual(['Java']);
      });
    });   
  });
});
