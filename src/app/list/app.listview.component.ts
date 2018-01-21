import { Component , Injectable, OnInit } from '@angular/core';
import { ListViewAppService } from './app.listview.service';
import { HttpClientModule } from '@angular/common/http';
import { process, State } from '@progress/kendo-data-query';
import { products } from './products';

import {
    GridComponent,
    GridDataResult,
    DataStateChangeEvent
} from '@progress/kendo-angular-grid';

@Component({
  selector: 'app-listview',
  templateUrl: './app.listview.html',
  providers:[ListViewAppService]
})

@Injectable()

export class ListViewComponent implements OnInit {
	 
	//public products: any[] = products;
	
	private state: State = {
        skip: 0,
        take: 5,
        
        // Initial filter descriptor
        filter: {
          logic: "or",
          filters: []
        }
    };

    private gridData: GridDataResult = process(products, this.state);

    protected dataStateChange(state: DataStateChangeEvent): void {
        this.state = state;
        this.gridData = process(products, this.state);
    }

	constructor(private _usersService: ListViewAppService) {

	}

	ngOnInit() {
       /* this._usersService.getAllUsers().subscribe(data => {
	      
	      this.users = data['data'];

	    }); */
		//this.loadForecasts();
		
	}
	
	

	editUser(user){
		console.log(user)
	}	

	deleteUser(user){
		console.log(user)
	}

}
