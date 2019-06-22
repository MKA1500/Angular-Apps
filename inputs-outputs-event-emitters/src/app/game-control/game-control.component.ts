import { Component,
         OnInit,
         EventEmitter,
         Output,
         ViewChild,
         ElementRef } from '@angular/core';

@Component({
  selector: 'game-control',
  templateUrl: './game-control.component.html',
  styleUrls: ['./game-control.component.css']
})
export class GameControlComponent implements OnInit {
  @Output() intervalFired = new EventEmitter<number>();
  @ViewChild('startNumber') startNumberRef: ElementRef;
  interval: any;
  lastNumber = 0;
  intervalRunned = false;

  constructor() { }

  ngOnInit() {

  }

  startTheGame() {
    if (!this.intervalRunned) {
      this.lastNumber = +this.startNumberRef.nativeElement.value;
      this.interval = setInterval(() => {
        this.intervalFired.emit(this.lastNumber + 1);
        this.lastNumber++;
      }, 1000);
      this.intervalRunned = true;
    }
  }

  pauseTheGame() {
    if (this.intervalRunned) {
      clearInterval(this.interval);
      this.intervalRunned = false;
    }
  }

}
