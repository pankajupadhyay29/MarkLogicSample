import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { getPageNumber } from '../store/reducers';

@Component({
  selector: 'app-pager',
  templateUrl: './pager.component.html',
  styleUrls: ['./pager.component.css']
})
export class PagerComponent implements OnInit {
  @Input() totalCount: number;
  @Input() currentPage: number;
  @Input() maxRecordInPage: number;
  @Input() query: string;

  @Output() onPageChange= new EventEmitter();

  CurrentSet = 0;
  TotalSet = 0;
  SetSize = 10;
  pagesArray = [];

  constructor() { }

  ngOnInit() {
   this.pagesArray = this.getPagesList();
   console.log(this.pagesArray);
  }

  ngOnChange({totalCount, currentPage, maxRecordInPage}) {
    this.pagesArray = this.getPagesList();
  }

  next() {
    this.CurrentSet += 1;
    this.pagesArray = this.getPagesList();
  }

  previous() {
    this.CurrentSet -= 1;
    this.pagesArray = this.getPagesList();
  }

  getPagesList() {
    console.log(this);

    const totalPages = Math.ceil(this.totalCount / this.maxRecordInPage);
    const currentSetStarting = (this.SetSize * this.CurrentSet) + 1;
    const pagesArray = [];
    for (let i = currentSetStarting; i < currentSetStarting + this.SetSize; i++) {
      pagesArray.push(i);
    }    
    return pagesArray;    
  }

  pageChange(pageNumber) {
    console.log(this.query);
    console.log(pageNumber);
    this.onPageChange.emit({query: this.query, currentPageNumber: pageNumber});
  }
}
