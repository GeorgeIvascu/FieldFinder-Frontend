import { Component, OnInit, Input } from '@angular/core';
import { DataServiceService } from '../service/data-service.service';
import { ActivatedRoute } from '@angular/router';
import { Booking } from '../terenuri/terenuri.component';

@Component({
  selector: 'app-modal-content',
  templateUrl: './modal-content.component.html',
  styleUrls: ['./modal-content.component.css']
})
export class ModalContentComponent implements OnInit {

  
  @Input() customerName;
  @Input() teren;
  booking = new Booking();
  tempTeren;
  selectedDate;
  idCounter: number=0;
  displayDate;
  tempBookings;
  successBookings = [];
 
  
  constructor(private service: DataServiceService, private route:ActivatedRoute) { }

  ngOnInit() {
    this.service.getTerenById(this.teren.id).subscribe(
      data => {
        this.tempTeren = data;
        console.log(this.tempTeren);
      }
    );


  }

  addBooking(){
    //console.log(this.time.hour, this.time.minute);
    console.log(this.customerName);
    console.log(this.selectedDate);
    console.log(this.selectedDate.toString().slice(0,15));
    console.log(this.selectedDate.toString().slice(16,21));


    // make the Booking object
    this.idCounter+=1;
    this.booking.id = this.idCounter;
    this.booking.clientName = this.customerName;
    this.booking.teren = this.tempTeren;
    this.booking.time = this.selectedDate.toString().slice(16,21);
    this.booking.date = this.selectedDate.toString().slice(0,15);
    this.booking.isAvailable = true;

    console.log(this.booking);

    // this.checkIfAvailable(this.booking.time);

    this.service.addBooking(this.booking).subscribe();

    
  }



  checkIfAvailable(hour){

    this.service.getBookingsByTeren(this.tempTeren.id).subscribe(
      data => {
        this.tempBookings = data;
        console.log(this.tempBookings);
      }
    );

  }

 

}
