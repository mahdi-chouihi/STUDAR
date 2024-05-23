import { Component, OnInit } from '@angular/core';
import { trigger, state, style, transition, animate } from '@angular/animations';
import { RouterLink, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-notifcard',
  standalone: true,
  imports: [RouterOutlet,RouterLink],
  templateUrl: './notifcard.component.html',
  styleUrl: './notifcard.component.css',
  animations: [
    trigger('flipState', [
      state('active', style({
        transform: 'rotateY(179deg)'
      })),
      state('inactive', style({
        transform: 'rotateY(0)'
      })),
      transition('active => inactive', animate('500ms ease-out')),
      transition('inactive => active', animate('500ms ease-in'))
    ])
  ]
})
export class NotifcardComponent {
  constructor() { }

  ngOnInit() {
  }

  flip: string = 'inactive';

  toggleFlip() {
    this.flip = (this.flip == 'inactive') ? 'active' : 'inactive';
  }

}
