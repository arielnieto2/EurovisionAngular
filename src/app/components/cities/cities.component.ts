import { Component, OnInit } from '@angular/core';
import { PageEvent } from '@angular/material/paginator';
import {CitiesService,City } from '../../services/cities.service';

@Component({
  selector: 'app-cities',
  templateUrl: './cities.component.html',
  styleUrls: ['./cities.component.css']
})
export class CitiesComponent implements OnInit {
    contenido: City[] = [];
    length:number;
    page_size:number = 5;
    page_number:number=1;



  constructor(private cityService: CitiesService) {
    this.getCitiesPaginated(this.page_size,this.page_number);
 }

 pageEvent(e:PageEvent){
   this.page_size = e.pageSize
   this.page_number = e.pageIndex+1
   this.getCitiesPaginated(this.page_size,this.page_number);
 }

getCitiesPaginated(page_size:number,page_number:number){
  this.cityService.getCities(page_size,page_number)
  .subscribe( (data:any) =>{
    console.log(data);
    this.length=data.totalElements;
    this.contenido =data.content;
  });
}
  ngOnInit() {
  }

}
