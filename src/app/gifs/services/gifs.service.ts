import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GifsService {

  constructor() { }

  private _log: string [] = [];

  get log() {
    return [...this._log];
  }

  searchGifs(query: string) {
    this._log.unshift(query);
    console.log(this._log);
  }

}
