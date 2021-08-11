import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class GifsService {

  private apiKey = 'h9CVTNo12MgbxKtTWIFUgNgvxl1CvY3C';
  private _log: string [] = [];

  public result: any [] = [];

  get log() {
    return [...this._log];
  }

  
  constructor(private http: HttpClient) { }

  searchGifs(query: string) {

    query = query.trim().toLocaleLowerCase();

    if (!this._log.includes(query)) {
      this._log.unshift(query);
      this._log = this._log.splice(0,10);
    }

    this.http.get(`https://api.giphy.com/v1/gifs/search?api_key=h9CVTNo12MgbxKtTWIFUgNgvxl1CvY3C&q=${query}&limit=10`)
      .subscribe((resp: any) => {
        console.log(resp.data);
        this.result = resp.data;
      });

    console.log(this._log);
  }

}
