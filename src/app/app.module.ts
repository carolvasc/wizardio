import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { PoModule } from '@po-ui/ng-components';
import { RouterModule } from '@angular/router';
import { CharactersComponent } from './characters/characters.component';
import { CharactersService } from './characters/characters.service';

@NgModule({
  declarations: [
    AppComponent,
    CharactersComponent
  ],
  imports: [
    BrowserModule,
    PoModule,
    HttpClientModule,
    RouterModule.forRoot([])
  ],
  providers: [CharactersService],
  bootstrap: [AppComponent]
})
export class AppModule { }
