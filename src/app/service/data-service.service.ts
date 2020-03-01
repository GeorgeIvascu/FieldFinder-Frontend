import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Teren, Booking } from '../terenuri/terenuri.component';

@Injectable({
  providedIn: 'root'
})
export class DataServiceService {

   // httpOptions = {headers: new HttpHeaders({'Access-Control-Allow-Origin':'*'})};

    httpOptions = {
    headers: new HttpHeaders({ 
      'Access-Control-Allow-Origin':'*',
      'Access-Control-Allow-Headers':'Access-Control-*, Origin, X-Requested-With, Content-Type, Accept',
       'Access-Control-Allow-Methods' :'GET, POST, PUT, DELETE, OPTIONS, HEAD'
    })
  };

   API_KEY = 'AIzaSyB_15W-d4UfsEpI1gWgfaxODa6KtXyMAIw';

  constructor(private http: HttpClient) { }

  getTerenuri(){
    return this.http.get<Teren>('http://localhost:8080/terenuri');
  }

  getTerenBySector(sector:number, sport){
    return this.http.get<Teren>(`http://localhost:8080/terenuri/${sector}/${sport}`);
  }

  getTerenById(id:number){
    return this.http.get<Teren>(`http://localhost:8080/teren/${id}`);
  }

  addBooking(booking){
    return this.http.post<Booking>(`http://localhost:8080/put`, booking, this.httpOptions);
  }

  getBookingsByTeren(id:number){
    return this.http.get<Booking>(`http://localhost:8080/bookings/${id}`);
  }
}
