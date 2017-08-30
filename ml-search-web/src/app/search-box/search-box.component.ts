import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-search-box',
  templateUrl: './search-box.component.html',
  styleUrls: ['./search-box.component.css']
})
export class SearchBoxComponent implements OnInit {
  @Input() searchTerm: Array<any>;
  @Input() loading: any;
  @Output() onSearch =  new EventEmitter();
  constructor() { }

  ngOnInit() {
  }

  search() {
    this.onSearch.emit(this.searchTerm);
 }
}
