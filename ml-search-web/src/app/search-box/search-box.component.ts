import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-search-box',
  templateUrl: './search-box.component.html',
  styleUrls: ['./search-box.component.css']
})
export class SearchBoxComponent implements OnInit {
  @Input() searchTerm: string;
  @Output() onSearch =  new EventEmitter();
  constructor() { }

  ngOnInit() {
  }

  search() {
    this.onSearch.emit(this.searchTerm);
 }
}
