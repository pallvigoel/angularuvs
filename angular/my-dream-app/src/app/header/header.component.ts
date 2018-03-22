import { Component, OnInit, ViewEncapsulation, OnChanges } from '@angular/core';

import { book } from "../models/book";

import { BooksService } from "./../books.service";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class HeaderComponent implements OnInit {
 
  constructor(){

  }
  ngOnInit() {
   console.log("ngonet");
  }


    public applicationname = "university library";
  
}
