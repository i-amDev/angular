import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {Login} from './login/login';
import {Component2} from './component2/component2';

@Component({
  selector: 'app-root',
  imports: [Login, Component2,],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('angular_learning');
  name : string = "Tony Stark";
  age : number = 55;
}
