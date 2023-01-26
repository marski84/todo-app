import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from 'src/app/app-routing.module';

@NgModule({
  declarations: [],
  imports: [AppRoutingModule, BrowserModule, BrowserAnimationsModule],
  exports: [AppRoutingModule, BrowserModule, BrowserAnimationsModule],
})
export class CoreModule {}
