import { Component, OnInit } from '@angular/core';
import { Player } from '../models/player';
import { RankingService } from '../services/ranking.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'ranking',
  templateUrl: './ranking.component.html',
  styleUrls: ['./ranking.component.css'],
})
export class RankingComponent implements OnInit {
  player = {} as Player;
  players: Player[] = [];

  constructor(private rankingService: RankingService) {}

  getRanking() {
    this.rankingService.getRanking().subscribe((players: Player[]) => {
      this.players = players;
    });
  }

  updateRanking(form: NgForm) {
    this.rankingService.updateRanking(this.player).subscribe(() => {
      this.cleanForm(form);
    });
  }

  cleanForm(form: NgForm) {
    this.getRanking();
    form.resetForm();
    this.player = {} as Player;
  }

  ngOnInit(): void {
    this.getRanking();
  }
}
