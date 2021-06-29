import { Component, OnInit } from '@angular/core';
import { AuthService } from './../auth.service';
import firebase from 'firebase/app';


@Component({
  selector: 'bs-navbar',
  templateUrl: './bs-navbar.component.html',
  styleUrls: ['./bs-navbar.component.css']
})
export class BsNavbarComponent {

  constructor(public auth: AuthService) { 
  }
  provider: any;

  logout(){
    var provider = new firebase.auth.GoogleAuthProvider();
    this.provider = provider;
    firebase.auth().signOut().then(() => {
      // Sign-out successful.
    }).catch((error) => {
      // An error happened.
    });
    this.auth.logout;
  }


}
