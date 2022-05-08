import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PlayerStatusComponent } from './player-status/player-status.component';
import { PlayerCommandsComponent } from './player-commands/player-commands.component';
import { GameLogComponent } from './game-log/game-log.component';
import { BasicAttackComponent } from './player-commands/basic-attack/basic-attack.component';
import { SpecialAttackComponent } from './player-commands/special-attack/special-attack.component';
import { HealComponent } from './player-commands/heal/heal.component';
import { GiveUpComponent } from './player-commands/give-up/give-up.component';

@NgModule({
  declarations: [
    AppComponent,
    PlayerStatusComponent,
    PlayerCommandsComponent,
    GameLogComponent,
    BasicAttackComponent,
    SpecialAttackComponent,
    HealComponent,
    GiveUpComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
