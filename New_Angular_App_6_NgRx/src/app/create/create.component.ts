import { Component, OnInit } from '@angular/core';
import { Observable } from "rxjs";
import { Store } from "@ngrx/store";
import { NewRx } from './../models/new-rx.model';
import { AppState } from './../app.state';
import * as NewrxActions from './../actions/new-rx.actions';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit {

  constructor(private store: Store<AppState>) { }

  addNewrx(name, url) {
    this.store.dispatch(new NewrxActions.AddNewrx({
      name: name,
      url: url
    }))
  }

  ngOnInit() {
  }

}
