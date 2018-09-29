import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { Observable } from 'rxjs';
import { Candidatos } from '../model/candidatos.model';

@Component({
  selector: 'app-list',
  templateUrl: 'list.page.html',
  styleUrls: ['list.page.scss']
})

export class ListPage implements OnInit {

	candidatos;
	setResolution: number;
	avatarSize: number;

	constructor(private dataService: DataService) { }

	ngOnInit() {

		this.setResolution = window.innerWidth;

    //resize avatar
 
		if(this.setResolution <= 375){
			this.avatarSize = 100;
		} else if(this.setResolution >= 768){
			this.avatarSize = 220;
		} 

		this.listAll();
		//console.log("Resolution:: " + window.innerWidth);
	}

	async listAll() {

    console.log("List All loading... ");

		await this.dataService.getCandidatos().subscribe(response => this.candidatos = response);

		console.log("Items loaded:: ");
   
	}

} 

