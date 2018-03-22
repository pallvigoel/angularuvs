import { Component, OnInit, ViewEncapsulation,Input } from '@angular/core';

import {HttpClient }from '@angular/common/http';

import {NgForm }from '@angular/forms';
@Component({
  selector: 'app-request-book',
  templateUrl: './request-book.component.html',
  styleUrls: ['./request-book.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class RequestBookComponent implements OnInit {
  @Input() childbooks;
  constructor( private http: HttpClient) { }
  ngOnInit(){
  }
  public submitbookrequestForm(bookForm:NgForm){
let bookToBeAdded=bookForm.value;
this.http.post('http://localhost:8000/books/addbook',bookToBeAdded).subscribe(response=>{

let status=response;

alert(`the response is`);
alert(`the response is:${response}`);
console.log(`thes response is ${response}`);

},
error=>{

  let status=error;
  alert(`fdf`);
  alert(`the response is:${error}`);
  console.log(error);
  
  })
  }
  
  


}