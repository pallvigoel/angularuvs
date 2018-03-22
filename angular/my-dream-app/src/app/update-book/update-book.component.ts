import { Component, OnInit, ViewEncapsulation,Input } from '@angular/core';
import {HttpClient }from '@angular/common/http';

import {NgForm }from '@angular/forms';

@Component({
  selector: 'app-update-book',
  templateUrl: './update-book.component.html',
  styleUrls: ['./update-book.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class UpdateBookComponent implements OnInit {

  constructor(private http: HttpClient) { }

  ngOnInit() {
  }
  public updateBook(updateBook){
    alert("hhhhhhhhh");
    let bookToBeAdded=updateBook;
this.http.put('http://localhost:8000/books/updatebook',bookToBeAdded).subscribe(response=>{

let status=response;

alert(`the response is`);
alert(`the response is:${response}`);
console.log(`thes response is ${response}`);

},
error=>{

  let status=error;
  alert(`fdf`);
  alert(`the response is:${error}`);
  console.log(${error});
  
  })
  
}
}
