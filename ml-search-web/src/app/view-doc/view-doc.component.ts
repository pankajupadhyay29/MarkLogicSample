import { Component, OnInit } from '@angular/core';
import {Router, ActivatedRoute, Params} from '@angular/router';
import { ViewDocService } from "../view-doc.service";

@Component({
  selector: "app-view-doc",
  templateUrl: "./view-doc.component.html",
  styleUrls: ["./view-doc.component.css"]
})
export class ViewDocComponent implements OnInit {
  answers: any;
  accepted_ans_id: any;
  ans = [];
  user_name: any;
  title: any;
  com: any;
  docs: any;
  doc: any[];
  url: any;
  private sub: any;
  comments = [];

  constructor(private route: ActivatedRoute, private view: ViewDocService) {}

  ngOnInit() {
    this.sub = this.route.params.subscribe(params => {
      this.url = params["url"];
    });

    let param1 = this.route.snapshot.queryParams["url"];

    const l = "?url=" + param1;

    this.view.getViewData(l).subscribe(res => {
      this.doc = res;
      this.getDoc(this.doc);
    });
  }

  getDoc(doc) {
    this.docs = doc;
    for (var i = 0; i < this.doc[0].content.comments.length; i++) {
      this.comments.push(this.doc[0].content.comments[i]);
    }
    this.getComments(this.comments);

    for (var j = 0; j < this.docs[0].content.answers.length; j++) {
      this.ans.push(this.docs[0].content.answers[j]);
    }

    this.getAnswers(this.ans);

    this.title = this.doc[0].content.title;
    this.user_name = this.docs[0].content.owner.displayName;
    this.accepted_ans_id = this.doc[0].content.acceptedAnswerId;
  }

  getAnswers(ans) {
    this.answers = ans;
  }

  getComments(com) {
    this.com = com;
  }
}
