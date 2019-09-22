import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TestComponent } from './test/test.component';
import { StylebindingComponent } from './stylebinding/stylebinding.component';
import { EventbindingComponent } from './eventbinding/eventbinding.component';
import { TemplatereferencevariablesComponent } from './templatereferencevariables/templatereferencevariables.component';
import { TwowaybindingComponent } from './twowaybinding/twowaybinding.component';

@NgModule({
  declarations: [
    AppComponent,
    TestComponent,
    StylebindingComponent,
    EventbindingComponent,
    TemplatereferencevariablesComponent,
    TwowaybindingComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
