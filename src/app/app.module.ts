import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AlertModule } from 'ngx-bootstrap';
import { HttpClientModule } from '@angular/common/http';
import { Router } from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { GridModule, ExcelModule } from '@progress/kendo-angular-grid';
import { process, State } from '@progress/kendo-data-query';

import { ListViewComponent } from './list/app.listview.component';

import { CreateUserComponent } from './users/app.createuser.component';
import { AppListViewComponent } from './list/app-list.component';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app.route.module';

import { HighlightDirective } from './list/app.listview.directive';

@NgModule({
  declarations: [
    AppComponent,
    ListViewComponent,
	AppListViewComponent,
    CreateUserComponent,
    HighlightDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,    
    AlertModule.forRoot(),
	HttpClientModule,
    GridModule,
	ExcelModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule { 

}
