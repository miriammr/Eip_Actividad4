import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Character } from '../models/character.interface';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CharacterService {
  private readonly URL_API = 'https://swapi.dev/api';

  constructor(private httpClient: HttpClient) {}

  findCharacters(): Observable<{ results: Character[] }> {
    return this.httpClient.get<{ results: Character[] }>(this.URL_API + '/people')
  }
}
