import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title: string;
  lugares: any = [
    {nombre: 'Floreria La Gardenia'},
    {nombre: 'Dunkin Domuts'},
    {nombre: 'Veterinaria La Garrapata'}
  ];

  constructor() {
    //
    this.title = 'HandCity';
  }
}
