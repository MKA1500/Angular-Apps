import { Action } from '@ngrx/store';
import { NewRx } from './../models/new-rx.model';
import * as NewrxActions from './../actions/new-rx.actions';

const initialState: NewRx = {
  name: 'Initial Newrx',
  url: 'https://www.google.pl/'
}

export function reducer(state: NewRx[] = [initialState], action: NewrxActions.Actions) {
  switch(action.type) {
    case NewrxActions.ADD_NEWRX:
      return [...state, action.payload];
    default:
      return state;
  }
}
