import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-answer',
  templateUrl: './answer.component.html',
  styleUrls: ['./answer.component.css']
})
export class AnswerComponent implements OnInit {
  @Input() ans: any;
  @Input() accepted: any;
  @Input() id: any;
  constructor() { }

  ngOnInit() {
  }

}
