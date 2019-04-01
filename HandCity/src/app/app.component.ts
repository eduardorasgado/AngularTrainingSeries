import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'HandCity';
  // string interpolation
  a = 3;
  b = 5;
  isReady = false;
  interval = null;

  constructor() {
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
  }
}
