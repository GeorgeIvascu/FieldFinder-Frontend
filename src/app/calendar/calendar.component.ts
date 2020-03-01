import { Component, OnInit } from '@angular/core';
import { ModalContentComponent } from '../modal-content/modal-content.component';
import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-calendar',
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.css']
})
export class CalendarComponent implements OnInit {

  months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
  week = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
  presentMonth = new Date().getMonth();
  presentYear = new Date().getFullYear();
  presentDay = new Date().getDate();

  daysInMonth = new Date(this.presentYear, this.presentMonth + 1, 0).getDate();
  daysArray=[];


  firstDay:string = new Date(this.presentYear, this.presentMonth, 1).toDateString();
  tempString;

  teren;


  constructor(private modalService: NgbModal, private router: ActivatedRoute) { }

  ngOnInit() {

    this.router.params.subscribe(
      data => {
        this.teren = data;
      }
    );

   console.log(this.months[this.presentMonth]);
   console.log(this.daysInMonth);

   this.tempString = this.firstDay.slice(0,3); // returneaza doar Ziua (Sat, etc)

   for(var i:number = 1; i<=this.daysInMonth; i++){
     this.daysArray.push(i);
   }

   console.log(this.firstDay);
   console.log(this.tempString == this.week[6]);

   for(var y:number=0; y<this.week.indexOf(this.tempString); y++){// pune null ca sa inceapa ziua lunii de unde trebuie
      this.daysArray.unshift(null);
   }
  }

  openModal(){
    const modalRef = this.modalService.open(ModalContentComponent);
    modalRef.componentInstance.teren = this.teren;
    console.log(this.teren);
  }

}
