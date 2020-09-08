import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-display-hero',
  templateUrl: './display-hero.component.html',
  styleUrls: ['./display-hero.component.css']
})
export class DisplayHeroComponent implements OnInit {

  @Input() hero;

  @Output() deleteHeroEvent = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  deleteHero(hero) {
    this.deleteHeroEvent.emit(hero);
  }

}
