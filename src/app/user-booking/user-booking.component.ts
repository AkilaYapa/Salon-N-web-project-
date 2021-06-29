import { Component, OnInit } from '@angular/core';
import { NgForm, NgModel } from '@angular/forms';

@Component({
  selector: 'app-user-booking',
  templateUrl: './user-booking.component.html',
  styleUrls: ['./user-booking.component.css']
})
export class UserBookingComponent {

  services = [
    {id:1 , name:"Make-up"},
    {id:1 , name:"Facial"},
    {id:1 , name:"Hair Services"},
    {id:1 , name:"Nail Service"},
    {id:1 , name:"Waxing"},
    {id:1 , name:"Wedding service"}
  ]

  constructor() { }

}
