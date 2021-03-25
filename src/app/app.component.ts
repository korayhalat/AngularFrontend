// Datayı yönettiğimiz yer burası...
// app.component.html in datasını destekleyen(yönettiğimiz) kısma Component denir.

import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html', //(Kimin Componenti olduğunu burası belirliyo)
  styleUrls: ['./app.component.css']    // css dosyalarının yolu...
})

export class AppComponent {
  title: string = 'northwind';  //tip belirlemek için , :string gibi kullanıyoruz.
  user: string = 'Koray Halat'; 

}