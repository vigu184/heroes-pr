import { Component, OnInit } from '@angular/core';
import {HERO} from '../mheroes';
import { hero } from '../hero';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit 
{

heroes = HERO;

selectedHero: hero;
  constructor() { }

  ngOnInit() 
  {
  }

  onSelect(hero:hero):void
  {
    this.selectedHero = hero;
  }

}
