import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { HomePageModule } from "./home-page/home-page.module";
import {MailService} from "./mail.service";
import {FormsModule} from "@angular/forms";
import {HttpModule} from "@angular/http";
import {AppRoutesModule} from "./app-routes.module";
import {DbService} from "./db.service";


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
      FormsModule,
      HttpModule,
      HomePageModule,
      AppRoutesModule
  ],
  providers: [MailService,DbService],
  bootstrap: [AppComponent]
})
export class AppModule {}
