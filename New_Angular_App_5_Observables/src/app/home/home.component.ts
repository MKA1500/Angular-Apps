import { Component, OnInit } from '@angular/core';

import { Observable } from 'rxjs/Observable';
import { interval } from 'rxjs';
import 'rxjs/Rx';
import { Observer } from 'rxjs/Observer';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    // const source = interval(1000);
    // //output: 0,1,2,3,4,5....
    // const subscribe = source.subscribe(val => console.log(val));

    const myObservable = Observable.create((observer: Observer) => {
      setTimeout(() => {
        observer.next();
      }, 2000)
    });
  }
}
