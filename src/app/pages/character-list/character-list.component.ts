import { Component, OnInit } from '@angular/core';
import { Character } from 'src/app/models/character.interface';
import { CharacterService } from 'src/app/services/character.service';

@Component({
  selector: 'app-character-list',
  templateUrl: './character-list.component.html',
  styleUrls: ['./character-list.component.scss'],
})
export class CharacterListComponent implements OnInit {
  characterList!: Character[];
  selectedPerson!: Character;

  constructor(private characterService: CharacterService) {}

  ngOnInit(): void {
    this.getCharacters();
  }

  private getCharacters(): void {
    this.characterService.findCharacters().subscribe({
      next: (resp) => {
        this.characterList = resp.results;
      },
      error: (err) => {
        console.log(err);
      },
    });
  }
  recivePerson(person: Character) {
    this.selectedPerson = person
  }
}
