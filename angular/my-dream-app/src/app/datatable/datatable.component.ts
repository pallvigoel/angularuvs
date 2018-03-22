import { Component, OnInit, ViewEncapsulation,Output,Input,EventEmitter } from '@angular/core';
import {book} from "../models/book";
import {HttpClient }from '@angular/common/http';

@Component({
  selector: 'app-datatable',
  templateUrl: './datatable.component.html',
  styleUrls: ['./datatable.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class DatatableComponent implements OnInit {
  @Input() childbooks;
//it represents a value that we are going to get from parent which is binded
    @Output() selectBook=new EventEmitter();

    constructor(private http: HttpClient) {
  
    }
  
  public booksSelected(selectedBook){
    this.selectBook.emit(selectedBook);//it go to parent component where it is catcheched by using (sel
  //lectbook=bookname($evenr))//this function is also defined in main pagecomponent,ts//where this var
  //able is used
  }
  
  

  public parentSharedMethod(){
    alert("hii");

  }

 
  
     ngOnInit() {
  
    }

}

