import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NumberValueAccessor } from '@angular/forms';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  sectoare =[1, 2, 3, 4, 5, 6];
  sporturi =['Fotbal', 'Tenis de camp', 'Tenis de masa', 'Volei', 'Baschet', 'Handbal'];
  selectedSector;
  selectedSport;

  constructor(private route: Router) { }

  ngOnInit() {
  }

  cauta(){
   
    console.log(this.selectedSport);
    console.log(this.selectedSector);
    console.log(this.selectedSector.replace('Sector', ''));
    this.selectedSector = this.selectedSector.replace('Sector', "");
    this.selectedSport.replace(/\s/g, "");


    this.route.navigateByUrl(`terenuri/${this.selectedSector}/${this.selectedSport}`);

  }

}
