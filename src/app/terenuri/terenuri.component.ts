import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DataServiceService } from '../service/data-service.service';

@Component({
  selector: 'app-terenuri',
  templateUrl: './terenuri.component.html',
  styleUrls: ['./terenuri.component.css']
})
export class TerenuriComponent implements OnInit {

  sectorAles;
  sportAles;
  terenuri;
  rezultate;

  constructor(private activatedRoute: ActivatedRoute, private service: DataServiceService) { }

  ngOnInit() {
    this.activatedRoute.params.subscribe(
      data=> {
        console.log(data);
        this.sectorAles = data.sector;
        this.sportAles = data.sport;
       // console.log(this.sportAles);
      }
    );

    this.service.getTerenuri().subscribe(
      data => {
        this.terenuri = data;
       // console.log(this.terenuri);
      }
    );

    this.service.getTerenBySector(this.sectorAles, this.sportAles).subscribe(
      data => {
        console.log(data);
        this.rezultate = data;
      }
    );
  }

  showMap(id){
    console.log(id);
  }


}


export class Teren {

  id;
  name;
  sport;
  sector;
  adresa;
  description;
  img;
}


export class Booking {
  id;
  clientName;
  teren: Teren;
  date;
  time;
  isAvailable;
}
