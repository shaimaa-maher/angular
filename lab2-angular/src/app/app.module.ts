import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AddComponent } from './Add/add/add.component';
import { ItemsComponent } from './List/items/items.component';
import {TodoServiceService} from '../app/shared/services/todoService.service' ;


@NgModule({
  declarations: [
    AppComponent,
    AddComponent,
    ItemsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [TodoServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
