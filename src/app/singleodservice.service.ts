import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

// import { map, catchError } from 'rxjs/operators';
// import { Observable } from "rxjs"; 

@Injectable({
  providedIn: 'root'
})
export class SingleodserviceService {

  constructor( private http: HttpClient) { }
  getdetailsval() {
     return this.http.get<any>("http://192.168.1.98:4200/assets/data/SingleOrderDetails.json");
    //  .pipe(map( (res: Response ) => res.json()))
    //  .pipe(catchError(
    //    (error : Response | any )=> error.Json()
    //  ));
    
   }
}
