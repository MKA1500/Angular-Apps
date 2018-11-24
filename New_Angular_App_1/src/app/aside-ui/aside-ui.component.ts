import { Component,
         OnInit,
         Input,
         Output,
         EventEmitter } from '@angular/core';

@Component({
  selector: 'app-aside-ui',
  templateUrl: './aside-ui.component.html',
  styleUrls: ['./aside-ui.component.css']
})
export class AsideUiComponent implements OnInit {

  @Input() public parentData;
  @Output() public childEvent = new EventEmitter();
  public colors = ['YellowGreen', 'Violet', 'Turquoise', 'Teal', 'SteelBlue', 'SandyBrown', 'Salmon'];
  public selectedColor = '';

  constructor() { }

  ngOnInit() {
  }
  fireEvent() {
    console.log('hello');
    this.childEvent.emit(this.selectedColor);
  }
}
