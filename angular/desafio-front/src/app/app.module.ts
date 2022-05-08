import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PlayerStatusComponent } from './player-status/player-status.component';
import { PlayerCommandsComponent } from './player-commands/player-commands.component';
import { GameLogComponent } from './game-log/game-log.component';

@NgModule({
  declarations: [
    AppComponent,
    PlayerStatusComponent,
    PlayerCommandsComponent,
    GameLogComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
