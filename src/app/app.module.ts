import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NewComponent } from './new/new.component';
import { New2Component } from './new2/new2.component';
import { Service1Service } from './service1.service';
import { New3Component } from './new3/new3.component';
import { LoginService } from './login.service';
import { OtherComponent } from './other/other.component';
import { RouterModule } from '@angular/router';
import { routes } from './app.routes';

@NgModule({
  declarations: [
    AppComponent,NewComponent, New2Component, New3Component, OtherComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    RouterModule.forRoot(routes)
  ],
  providers: [Service1Service,LoginService],
  bootstrap: [AppComponent]
})
export class AppModule { }
