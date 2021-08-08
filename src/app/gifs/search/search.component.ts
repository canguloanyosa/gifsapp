import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styles: [
  ]
})
export class SearchComponent implements OnInit {



  constructor() { }

  ngOnInit(): void {
  }

  @ViewChild('txtSearch') txtSearch!: ElementRef<HTMLInputElement>;

  search() {

    const value = this.txtSearch.nativeElement.value;
    console.log(value);
    this.txtSearch.nativeElement.value='';
  }

}
