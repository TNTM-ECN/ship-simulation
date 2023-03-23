import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ButtonsLayerComponent } from './components/buttons-layer/buttons-layer.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from "./material.module";
import { PropulsionMenuComponent } from './components/propulsion-menu/propulsion-menu.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import { DynamicQuestionComponent } from './components/dynamic-question/dynamic-question.component';
import { SubSystemCardComponent } from './components/sub-system-card/sub-system-card.component';


@NgModule({
  declarations: [
    AppComponent,
    ButtonsLayerComponent,
    PropulsionMenuComponent,
    DynamicQuestionComponent,
    SubSystemCardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    MaterialModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
