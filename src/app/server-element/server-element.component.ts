import {
  Component,
  OnInit,
  Input,
  ViewEncapsulation,
  OnChanges,
  SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-server-element',
  templateUrl: './server-element.component.html',
  styleUrls: ['./server-element.component.css'],
  encapsulation: ViewEncapsulation.None // .None, .Native
})
export class ServerElementComponent implements OnInit, OnChanges {
  @Input('srvElement') element: {type: string, name: string, content: string}
  @Input() name: String;
  constructor() {
    console.log('constructor called!');
  }

  ngOnInit() {
    console.log('onChanges called!');
  }

  ngOnChanges(changes: SimpleChanges) {
    console.log('ngOnChanges called!');
    console.log(changes);
  }

}
