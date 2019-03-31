import {Component, OnInit, Input, Output, EventEmitter} from '@angular/core';
import { Scroll } from '../scroll';

@Component({
  selector: 'app-scroll-detail',
  templateUrl: './scroll-detail.component.html',
  styleUrls: ['./scroll-detail.component.css']
})
export class ScrollDetailComponent implements OnInit {
  @Input() scroll: Scroll;
  @Output() userNameChange = new EventEmitter<string>();
  onNameChange(model: string) {
    console.log(model);
    this.userNameChange.emit(model);
  }
  constructor() { }

  ngOnInit() {
  }

}
