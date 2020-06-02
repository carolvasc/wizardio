import { Component, OnInit } from '@angular/core';
import { CharactersService } from './characters.service';
import { Characther } from '../models/Characthers';

@Component({
  selector: 'app-characters',
  templateUrl: './characters.component.html',
  styleUrls: ['./characters.component.css']
})
export class CharactersComponent implements OnInit {

  constructor(private _charactersService: CharactersService) { }

  characthers: Characther[] = [];

  ngOnInit(): void {
    this._charactersService.getAllCharacters()
      .subscribe(response => response.length ? this.characthers = response : null);
  }

  moreInfo() {
    
  }

}
