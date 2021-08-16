import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { SearchGifsResponse, Gif } from '../interfaces/gifs.interface';

@Injectable({
  providedIn: 'root'
})
export class GifsService {

  private apiKey = 'h9CVTNo12MgbxKtTWIFUgNgvxl1CvY3C';
  private _log: string [] = [];
  public result: Gif [] = [];

  get log() {
    return [...this._log];
  }

  
  constructor(private http: HttpClient) {
    this._log = JSON.parse(localStorage.getItem('log')!) || [];
    this.result = JSON.parse(localStorage.getItem('result')!) || [];
  }

  searchGifs(query: string) {

    query = query.trim().toLocaleLowerCase();

    if (!this._log.includes(query)) {
      this._log.unshift(query);
      this._log = this._log.splice(0,10);
      localStorage.setItem('log', JSON.stringify(this._log));
    }

    this.http.get<SearchGifsResponse>(`https://api.giphy.com/v1/gifs/search?api_key=h9CVTNo12MgbxKtTWIFUgNgvxl1CvY3C&q=${query}&limit=10`)
      .subscribe((resp) => {
        console.log(resp.data);
        this.result = resp.data;
        localStorage.setItem('result', JSON.stringify(this.result));
      });

    console.log(this._log);
  }

}
