import { Component } from '@angular/core';

@Component({
  selector: 'app-login',
  imports: [],
  templateUrl: './login.html',
  styleUrl: './login.css'
})
export class Login {

  // handleButtonEvent() {
  //   // alert("Button clicked and Function Called.");
  //   console.log("Button clicked and Function Called.");
  //   this.otherFunction();
  // }
  //
  // otherFunction() {
  //   console.log("Other Function Called.");
  // }

  value : number = 0;

  handleIncrement() {
    this.value = (this.value + 1);
  }

  handleReset() {
    this.value = 0;
  }

  handleDecrement() {
    this.value = (this.value - 1);
  }

  handleButtonEvent(input:string) {
    if (input === 'plus') {
      this.value = (this.value + 1);
    }
    else if (input === 'minus') {
      this.value = (this.value - 1);
    }
    else {
      this .value = 0;
    }
  }
}
