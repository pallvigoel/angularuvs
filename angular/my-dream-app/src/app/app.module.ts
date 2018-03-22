import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { RouterModule, Routes } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { AngularFontAwesomeModule } from 'angular-font-awesome';
import {BooksService} from './books.service';
import { MainPageComponent } from './main-page/main-page.component';
import { RequestBookComponent } from './request-book/request-book.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { book } from "./models/book";
import { DatatableComponent } from './datatable/datatable.component';
import { UpdateBookComponent } from './update-book/update-book.component';
import { UserComponent } from './user/user.component';
import { ShopkeeperComponent } from './shopkeeper/shopkeeper.component';

const appRoutes:Routes=[
{ path:'',redirectTo:'home',pathMatch:"full"},

{ path:'request',component:RequestBookComponent},
{ path:'updateBook',component: UpdateBookComponent},

/*
{ path:'book/:title/update',component:RequestBookComponent},
*/

{ path:'home',component:MainPageComponent},
{ path:'**',component:PageNotFoundComponent},
]
//ng module contain various different components 
//it is logcasl divison between 
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    MainPageComponent,
    RequestBookComponent,
    PageNotFoundComponent,
    DatatableComponent,
    UpdateBookComponent,
    UserComponent,
    ShopkeeperComponent
  ],
  imports: [
    RouterModule.forRoot(appRoutes),
    BrowserModule,
    FormsModule,
    AngularFontAwesomeModule,
    HttpClientModule 
    
  ],
  providers: [BooksService],//a service can be shared between diffearnt components
  bootstrap: [AppComponent]
})
export class AppModule { 

}
