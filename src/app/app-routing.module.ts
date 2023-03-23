import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {ButtonsLayerComponent} from "./components/buttons-layer/buttons-layer.component";

const routes: Routes = [
  {path: '', component: ButtonsLayerComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
