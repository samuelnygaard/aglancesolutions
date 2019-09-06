import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-academic',
  templateUrl: './academic.component.html',
  styleUrls: ['./academic.component.scss']
})
export class AcademicComponent implements OnInit {
  elem = 'This is a test';
  content = [this.elem];
  constructor() { }

  ngOnInit() {
  }

  addElem() {
    this.content.push(this.elem);
    this.content.push(this.elem);
    this.content.push(this.elem);
    this.content.push(this.elem);
  }

  clear() {
    this.content = [];
  }

}
