import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'HandCity';
  // string interpolation
  a: number;
  b: number;
  nombre: string;
  apellidos: string;
  isReady: boolean;
  interval: any;

  constructor() {
    this.isReady = false;
    this.a = 1;
    this.b = 1;
    // actualizar el valor de a cada segundo
    setTimeout(() => {
      this.interval = setInterval(() => { this.a++; }, 1000);
      this.isReady = true;
    }, 3000);
  }

  // podemos realizar event byding llamando a funciones desde el html
  // usando (click) o sus semejantes
  public increaseByThousand(): void {
    this.b += 1000;
    this.nombre = '';
  }
}
