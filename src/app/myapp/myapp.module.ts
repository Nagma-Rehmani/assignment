import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MyappRoutingModule } from './myapp-routing.module';
import { MyappComponent } from './myapp/myapp.component';
import { RouterModule } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';


@NgModule({
  declarations: [
    MyappComponent,
  ],
  imports: [
    CommonModule,
    MyappRoutingModule,
    BrowserModule,
    RouterModule.forRoot(routes)
  ]
})
export class MyappModule { }
