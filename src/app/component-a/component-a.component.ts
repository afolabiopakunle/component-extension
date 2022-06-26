import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-component-a',
  templateUrl: './component-a.component.html',
  styleUrls: ['./component-a.component.css']
})
export class ComponentAComponent implements OnInit {

  baseName = 'Afolabi Opakunle'

  @Input() inputName:string;
  
  constructor() { }

  ngOnInit() {
  }

  spreader() {
    console.log(this.inputName)
  }
}