import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ButtonsLayerComponent } from './components/buttons-layer/buttons-layer.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from "./material.module";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { DynamicQuestionComponent } from './components/dynamic-question/dynamic-question.component';
import { ComplexSubSystemCardComponent } from './components/complex-sub-system-card/complex-sub-system-card.component';
import { UnitPipe } from "./pipes/unit.pipe";

@NgModule({
  declarations: [
    AppComponent,
    ButtonsLayerComponent,
    DynamicQuestionComponent,
    ComplexSubSystemCardComponent,
    UnitPipe
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
