import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Candidatos } from './model/candidatos.model';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http: HttpClient) {}

  	getCandidatos(){
        console.log("getCandidatos exec:: ");
  		return this.http.get("assets/list-candidatos.json");
  	}

	  /*
  	public getJSON(): Observable<Candidatos> {

  		const lista = JSON.stringify(this.http.get("./assets/list-candidatos.json")); 

  		console.log("getJson exec ok:: " + lista);

  		return lista ? JSON.parse(lista):[];

       // return this.http.get("./assets/list-candidatos.json");
	} */

}
