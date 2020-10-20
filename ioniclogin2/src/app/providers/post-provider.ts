import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';



import 'rxjs/add/operator/map';

@Injectable()
export class PostProvider {
	server: string = "http://localhost:1992/tutorial/server_api/"; // default
	// if you test in real device "http://localhost" change use the your IP	
    // server: string = "http://192.199.122.100/IONIC4_CRUD_LOGINREGIS_PHP_MYSQL/server_api/"; 

	constructor(public http : HttpClient) {

	}

	postData(body, file){
		let type = "application/json; charset=UTF-8";

  let headers = new HttpHeaders();
  headers = headers.set('Content-Type', 'application/json; charset=utf-8');

        let options = { headers: headers };

	return this.http.post(this.server + file, JSON.stringify(body), options)
        .map(res => res);
   
	}
}