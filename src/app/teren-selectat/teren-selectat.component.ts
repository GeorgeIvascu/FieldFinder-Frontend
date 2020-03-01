import { Component, OnInit } from '@angular/core';
import { DataServiceService } from '../service/data-service.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-teren-selectat',
  templateUrl: './teren-selectat.component.html',
  styleUrls: ['./teren-selectat.component.css']
})
export class TerenSelectatComponent implements OnInit {

  terenSelectat;
  idTeren;

  constructor(private service: DataServiceService, private route:ActivatedRoute) { }

  ngOnInit() {

    this.route.params.subscribe(
      data => {
        this.idTeren = data.id;
      }
    );

    this.service.getTerenById(this.idTeren).subscribe(
      data => {
        this.terenSelectat = data;
        console.log(this.terenSelectat);
      }
    );
  }

}
