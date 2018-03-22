import { Component, OnInit, ViewEncapsulation, ViewChild } from '@angular/core';
import { book } from "../models/book";
import { BooksService } from "./../books.service";
import { BookInterface } from "./../models/interfaces";
import { HttpClient } from '@angular/common/http';
import { error } from 'util';
import {NgForm }from '@angular/forms';

import { DatatableComponent } from '../datatable/datatable.component';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.css'],
  encapsulation: ViewEncapsulation.None
})

export class MainPageComponent implements OnInit {

  @ViewChild(DatatableComponent)//when we want touse our childcomponents in mainpagecomponent
  private childName: DatatableComponent;
  public fun() {
    this.childName.parentSharedMethod();
    alert('child fun called');
  }

  public books: Array<book>;
  public parentbooks: Array<book>;
  public book2: BookInterface;

  constructor(private booksService: BooksService, private http: HttpClient) {
    // this.books=booksService.getBooksList();
    console.log("header is created");
    console.log(`this book ${this.mybook.title}`);
    for (let i in this.books) {
      let bookEntryDate = this.books[i].entryDate;

      if (bookEntryDate != undefined && typeof (this.books[i].entryDate) != "object")
        this.books[i].entryDate = new Date(bookEntryDate.slice(0, 4), bookEntryDate.slice(5, 7), bookEntryDate.slice(8));

    }
    this.http.get<book[]>('http://localhost:8000/books').subscribe(
      response => {
        this.parentbooks = response;
      }, error => {
        alert("some error");
      }
    );//it is a callback function which is used to handle ashrounous function it means thta till the res
    //sponse has not come it can proceed further without blocking the application 
    //thus it
  }
  ngOnInit() {
    console.log("ngonet");
    this.book2 = { volume: 1, name: '', title: '', entryDate: '' };



  }

  public studentname = "avinash";
  public buttonstate = "avinash";
  public mybook = new book('pallvi', 'abcd');

  public clickSubmit() {
    let buttonstate = true;
    alert("submit" + this.buttonstate);
    this.getButtonState();
  }
  public getButtonState() {

    alert("submit ");

  }
  public showTable: boolean = true;
  toggleTableVisibility() {
    this.showTable = !(this.showTable);
  }

  showalert(valuefromlayout) {
    alert(`it shows ${valuefromlayout} this`);

  }

  public selectedBookName: string;

  public booksSelected(selectedBook) {
    this.selectedBookName = selectedBook.title;
  }
}
  /*
  public updatebooks(updatebook:book) {
    let bookupdated=updatebook;
    this.http.put('http://localhost:8000/books/update',bookupdated).subscribe(
      response => {
        let status = response;
      }, error => {

  let status=error;
  alert(`fdf`);
  alert(`the response is:${error}`);
  console.log(error);
  
        alert("some error");
      }
    );
    
  }
}
*/
