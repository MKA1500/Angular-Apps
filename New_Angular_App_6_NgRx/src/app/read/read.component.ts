import { Component, OnInit } from '@angular/core';
import { Observable } from "rxjs";
import { Store } from "@ngrx/store";
import { NewRx } from './../models/new-rx.model';
import { AppState } from './../app.state';

@Component({
  selector: 'app-read',
  templateUrl: './read.component.html',
  styleUrls: ['./read.component.css']
})
export class ReadComponent implements OnInit {

  newrxes: Observable<NewRx[]>;

  constructor(private store: Store<AppState>) {
    this.newrxes = store.select('newrx')
  }

  ngOnInit() {
  }

}
