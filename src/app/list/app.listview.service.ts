import { NgModule , Injectable, OnInit } from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {HttpClientModule,HttpClient} from '@angular/common/http';


@NgModule({
  imports: [
    BrowserModule,
    // Include it under 'imports' in your application module
    // after BrowserModule.
    HttpClientModule,
  ],
})

@Injectable()

export class ListViewAppService{
	results: string[];

	  constructor(private http: HttpClient) {

	  }
 
	  getAllUsers(){

	    // Make the HTTP request:
	    return this.http.get('http://localhost:90/users/getAll');
	  }

}