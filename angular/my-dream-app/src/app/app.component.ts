import { Component } from '@angular/core';

@Component({
  selector: 'app-root',  
 templateUrl:'./app.component.html',
 styleUrls:['./app.component.css']
})
export class AppComponent {
  title = 'app';
batch="uca 2018";
a=10;
b=20;
sum=10;
someFun(){
  this.sum=this.a+this.b;
}
}

