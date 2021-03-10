import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title: string = 'northwind';        //tip belirlemek için , :string gibi kullanıyoruz.
  user: string = 'Koray Halat'; 

}

