import {Component} from '@angular/core';

@Component({
  selector: 'app-component2',
  imports: [],
  templateUrl: './component2.html',
  styleUrl: './component2.css'
})
export class Component2 {

  userName : string = "";
  displayName : string = "";

  getName(event: Event) {
    console.log((event.target as HTMLInputElement).value);
    this.userName = (event.target as HTMLInputElement).value;
  }

  handleClickEvent() {
    this.displayName = this.userName;
  }

  setName() {
    this.userName = "Default User";
  }

}
