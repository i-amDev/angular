import { Component } from '@angular/core';

@Component({
  selector: 'app-if-else-component',
  imports: [],
  templateUrl: './if-else-component.html',
  styleUrl: './if-else-component.css'
})
export class IfElseComponent {
  displayValue : number = 4;
  display : boolean = true;

  handleShow() {
    this.display = true;
  }

  handleHide() {
    this.display = false;
  }
}
