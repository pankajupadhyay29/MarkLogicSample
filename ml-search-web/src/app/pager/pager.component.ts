import {
  Component,
  OnInit,
  OnChanges,
  Input,
  Output,
  EventEmitter,
  SimpleChanges
} from "@angular/core";
import { getPageNumber } from '../store/reducers';

@Component({
  selector: "app-pager",
  templateUrl: "./pager.component.html",
  styleUrls: ["./pager.component.css"]
})
export class PagerComponent implements OnInit, OnChanges {  
  @Input() totalCount: number;
  @Input() currentPage: number;
  @Input() maxRecordInPage: number;
  @Input() query: string;

  @Output() onPageChange = new EventEmitter();

  CurrentSet = 0;
  TotalSet = 0;
  SetSize = 10;
  pagesArray = [];

  constructor() {}

  ngOnInit() {
    this.CurrentSet = this.getCurrentSet();
    this.pagesArray = this.getPagesList();
  }

  ngOnChanges(changes: SimpleChanges): void {
    this.CurrentSet = this.getCurrentSet();
    this.pagesArray = this.getPagesList();    
  }

  getCurrentSet() {
    return Math.floor(this.currentPage / this.maxRecordInPage);
  }

  nextSet() {
    if (this.isLastSet()) {
      return;
    }

    this.CurrentSet += 1;
    this.pagesArray = this.getPagesList();
  }

  previousSet() {
    if (this.isFirstSet()) {
      return;
    }

    this.CurrentSet -= 1;
    this.pagesArray = this.getPagesList();
  }

  isFirstSet() {
    return this.CurrentSet === 0;
  }

  totalPageCount() {
    return Math.ceil(this.totalCount / this.maxRecordInPage);
  }

  isLastSet() {
    return (
      this.CurrentSet >= Math.ceil(this.totalPageCount() / this.SetSize) - 1
    );
  }

  getPagesList() {
    if (this.totalCount === 0) {
      return [];
    }

    const currentSetStarting = this.SetSize * this.CurrentSet;
    const pagesArray = [];
    const currentSetEnding = Math.min(
      currentSetStarting + this.SetSize,
      this.totalPageCount()
    );
    for (let i = currentSetStarting + 1; i <= currentSetEnding; i++) {
      pagesArray.push(i);
    }

    return pagesArray;
  }

  pageChange(pageNumber) {
    this.onPageChange.emit({
      query: this.query,
      currentPageNumber: pageNumber
    });
  }
}
