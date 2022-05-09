import { Injectable } from '@angular/core';
import {
  HttpClient,
  HttpErrorResponse,
  HttpHeaders,
} from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { retry, catchError } from 'rxjs/operators';
import { Player } from '../models/player';

@Injectable({
  providedIn: 'root',
})
export class RankingService {
  url: string = 'http://127.0.0.1:8080/api/v1/showRanking';

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
  };

  getRanking(): Observable<Player[]> {
    return this.httpClient
      .get<Player[]>(this.url)
      .pipe(retry(2), catchError(this.handleError));
  }

  updateRanking(player: Player): Observable<Player> {
    return this.httpClient
      .post<Player>(this.url, JSON.stringify(player), this.httpOptions)
      .pipe(retry(2), catchError(this.handleError));
  }

  handleError(error: HttpErrorResponse) {
    let errorMessage = '';
    if (error.error instanceof ErrorEvent) {
      // Erro ocorreu no lado do client
      errorMessage = error.error.message;
    } else {
      // Erro ocorreu no lado do servidor
      errorMessage =
        `Código do erro: ${error.status}, ` + `menssagem: ${error.message}`;
    }
    console.log(errorMessage);
    return throwError(errorMessage);
  }

  constructor(private httpClient: HttpClient) {}
}
