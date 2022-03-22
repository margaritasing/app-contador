import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app-contador';
  nombre:string = "Libia";
  contador:number = 0
  
  add(){
    this.contador++
  }

  remove(){
    this.contador--
  }
}
