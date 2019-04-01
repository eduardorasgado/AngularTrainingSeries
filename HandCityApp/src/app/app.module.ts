import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AgmCoreModule } from '@agm/core';


import { AppComponent } from './app.component';

import { ApisConfig } from '../apisConfig';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AgmCoreModule.forRoot({
      // importando la llave de google maps de una clase de llaves
      apiKey: ApisConfig.getGoogleMapApi()
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
