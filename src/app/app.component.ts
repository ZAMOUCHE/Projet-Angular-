import { Component } from '@angular/core';
import * as firebase from 'firebase';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'projet-bibiotheque';

  constructor(){
  	const config = {
  		apiKey: "AIzaSyCnZbo79NZtWN3TeJI1uAbfIMy0jc2f748",
    	authDomain: "biblio-cec9a.firebaseapp.com",
    	databaseURL: "https://biblio-cec9a.firebaseio.com",
    	projectId: "biblio-cec9a",
    	storageBucket: "",
    	messagingSenderId: "341302505157",
    	appId: "1:341302505157:web:cbde602929ceb7a3"
  	};
  	firebase.initializeApp(config);
  }
}
