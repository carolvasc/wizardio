import { Injectable, Inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, Subject } from 'rxjs';
import { Characther } from '../models/Characthers';

@Injectable({
  providedIn: 'root'
})
export class CharactersService {

  constructor(private http: HttpClient) { }

  getAllCharacters(): Observable<Characther[]> {
    return this.http.get<Characther[]>(`http://hp-api.herokuapp.com/api/characters/`);
  }
}
