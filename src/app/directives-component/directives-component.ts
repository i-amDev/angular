import { Component } from '@angular/core';
import {NgFor, NgIf} from '@angular/common';

@Component({
  selector: 'app-directives-component',
  imports: [NgIf, NgFor],
  templateUrl: './directives-component.html',
  styleUrl: './directives-component.css'
})
export class DirectivesComponent {

  show : boolean = false;

  stdNames : string[] = ["Tony", "Steve", "Bruce", "Peter"];
}
