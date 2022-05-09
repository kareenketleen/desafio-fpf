import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { RankingComponent } from './ranking/ranking.component';
import { AppComponent } from './app.component';

const routes: Routes = [
  { path: 'ranking', component: RankingComponent },
  { path: 'play', component: AppComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
