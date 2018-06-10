import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-checkboxes-material',
  templateUrl: './checkboxes-material.component.html',
  styleUrls: ['./checkboxes-material.component.css']
})
export class CheckboxesMaterialComponent implements OnInit {
  constructor() { }
  isChecked = true;
  onChange($event) {
    console.log($event);
  }

  ngOnInit() {
  }

}
