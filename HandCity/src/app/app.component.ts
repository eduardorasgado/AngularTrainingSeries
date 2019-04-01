import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title: string;
  lugares: any = [
    { active: true, nombre: 'Floreria La Gardenia'},
    { active: true, nombre: 'Dunkin Domuts'},
    { active: true, nombre: 'Veterinaria La Garrapata'},
    { active: false, nombre: 'Sushi Sushiroll'},
    { active: true, nombre: 'Plaza Ambar'}
  ];

  constructor() {
    //
    this.title = 'HandCity';
  }
}
