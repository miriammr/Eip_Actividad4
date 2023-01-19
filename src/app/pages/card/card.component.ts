import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { Character } from 'src/app/models/character.interface';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss'],
})
export class CardComponent implements OnInit {
  @Input() person!: Character;

  @Output() sendPerson: EventEmitter<Character> = new EventEmitter<Character>()

  constructor() {}

  ngOnInit(): void {}


  selectPerson(person: Character) {
    this.sendPerson.emit(person)
  }
}
