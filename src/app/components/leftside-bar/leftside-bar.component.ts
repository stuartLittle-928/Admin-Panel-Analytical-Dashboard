import { NgClass, NgFor, NgIf } from '@angular/common';
import { Component, Input, input } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-leftside-bar',
  standalone: true,
  imports: [RouterLink,NgFor, NgIf],
  templateUrl: './leftside-bar.component.html',
  styleUrl: './leftside-bar.component.css'
})
export class LeftsideBarComponent {

  showsidebar: boolean = true;

  clickmeCalled() {
    this.showsidebar = !this.showsidebar;
  }
  dummyDataArray: any =
    [
      { count: 1, length: 1, skill: "Activating" },
      { count: 4, length: 1, skill: "Using" },
      { count: 2, length: 1, skill: "Analyzing" },
      { count: 2, length: 1, skill: "Summarizing" },
      { count: 1, length: 1, skill: "Predicting" },
      { count: 4, length: 1, skill: "Analyzing" },
      { count: 4, length: 1, skill: "Analyzing" },
      { count: 4, length: 1, skill: "Analyzing" },
      { count: 4, length: 1, skill: "Analyzing" },
      { count: 4, length: 1, skill: "Analyzing" },
      { count: 4, length: 1, skill: "Analyzing" },
      { count: 4, length: 1, skill: "Analyzing" },
      { count: 4, length: 1, skill: "Analyzing" },
      { count: 4, length: 1, skill: "Analyzing" },
      { count: 4, length: 1, skill: "Analyzing" },
      { count: 4, length: 1, skill: "Analyzing" },
      { count: 4, length: 1, skill: "Analyzing" },
      { count: 4, length: 1, skill: "Analyzing" },
      { count: 4, length: 1, skill: "Analyzing" },
    ];

}