import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { AppRoutingModule } from './/app-routing.module';
import { UserComponent } from './user/user.component';
import { HomeComponent } from './home/home.component';
import { PageNotFoundComponent } from './pageNotFound.component';


@NgModule({
  declarations: [
    AppComponent,
    UserComponent,
    HomeComponent,
    PageNotFoundComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
