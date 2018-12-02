import { Component, OnInit, OnDestroy } from '@angular/core';

import { Observable } from 'rxjs/Observable';
import 'rxjs/Rx';
import { Observer } from 'rxjs/Observer';
import { Subscription } from 'rxjs/Subscription';
import { interval } from 'rxjs';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit, OnDestroy {
  numbersObsSubscription: Subscription;
  customObsSubscription: Subscription;

  constructor() { }

  ngOnInit() {
    // ERROR TypeError: rxjs_Observable__WEBPACK_IMPORTED_MODULE_1__.Observable.interval is not a function

    // const myNumbers = Observable.interval(1000);
    // this.numbersObsSubscription = myNumbers.subscribe(
    //   (number: number) => {
    //     console.log(number);
    //   }
    // );

    const myObservable = Observable.create((observer: Observer<string>) => {
      setTimeout(() => {
        observer.next('first package');
      }, 1000);
      setTimeout(() => {
        observer.next('second package');
      }, 2000);
      setTimeout(() => {
        observer.complete();
      }, 3000);
      setTimeout(() => {
        observer.next('third package');
      }, 4000);
    });
    this.customObsSubscription = myObservable.subscribe(
      (data: string) => { console.log(data); },
      (error: string) => { console.log(error); },
      () => { console.log('completed') }
    );
  }

  ngOnDestroy() {
    // this.numbersObsSubscription.unsubscribe();
    this.customObsSubscription.unsubscribe();
  }
}
