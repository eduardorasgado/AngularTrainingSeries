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
  lat: number;
  lng: number;

  personas: any = [
    {nombre: 'Pedro Colina', edad: 15},
    {nombre: 'Maria García', edad: 25},
    {nombre: 'Jose Fernández', edad: 22},
    {nombre: 'Ana Lopez', edad: 12}
  ];

  constructor() {
    //
    this.title = 'HandCity';
    this.lat = 16.4470856;
    this.lng = -95.0141935;
  }
}
