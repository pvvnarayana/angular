import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TemplatereferencevariablesComponent } from './templatereferencevariables/templatereferencevariables.component';
import { TestComponent } from './test/test.component';
import { StylebindingComponent } from './stylebinding/stylebinding.component';
import { EventbindingComponent } from './eventbinding/eventbinding.component';
import { AppComponent } from './app.component';
import { TwowaybindingComponent } from './twowaybinding/twowaybinding.component';


const routes: Routes = [
  { path:"templatereferencevariables", component:TemplatereferencevariablesComponent},
  { path:"databinding", component:TestComponent},
  { path:"stylebinding", component:StylebindingComponent},
  { path:"eventbinding", component:EventbindingComponent},
  { path:"twowaybinding", component:TwowaybindingComponent}
  //{ path:"", component:AppComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
