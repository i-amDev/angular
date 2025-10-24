import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {Login} from './login/login';
import {Component2} from './component2/component2';
import {IfElseComponent} from './if-else-component/if-else-component';
import {SwitchComponent} from './switch-component/switch-component';
import {ForLoopComponent} from './for-loop-component/for-loop-component';
import {TwoWayBindingComponent} from './two-way-binding-component/two-way-binding-component';
import {DirectivesComponent} from './directives-component/directives-component';

@Component({
  selector: 'app-root',
  imports: [Login, Component2,IfElseComponent, SwitchComponent, ForLoopComponent, TwoWayBindingComponent, DirectivesComponent],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('angular_learning');
  name : string = "Tony Stark";
  age : number = 55;
}
