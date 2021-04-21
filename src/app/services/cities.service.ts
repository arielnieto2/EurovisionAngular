import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable()
export class CitiesService {

  constructor(private http: HttpClient) {
    console.log("Servicio listo");
  }

  getCities(page_size:number,page_number:number) {
  return  this.http.get(`http://localhost:8081/api/cities/queryByPage?page=${page_number}&size=${page_size}`);
  }


}
export interface City{
  id:number;
  cityName:string;
}
