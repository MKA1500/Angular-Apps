import { Injectable, EventEmitter } from '@angular/core';
import { Subject } from 'rxjs';
// Subject is used to communicate across components
// othervise it should not replace simple EventEmitters

@Injectable({
  providedIn: 'root'
})

export class UserService {
  activatedEmitter = new Subject<boolean>();
}
