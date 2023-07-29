import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CommonModule } from "@angular/common";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { NgxEditorModule } from "ngx-editor";
import { ButtonModule } from 'primeng/button';
import { MultipleDivComponent } from './multiple-div/multiple-div.component';
import { EditorComponent } from './editor/editor.component';
import { AddFilesComponent } from './add-files/add-files.component'; // Import the required module
import { AccordionModule } from 'primeng/accordion';
import { SpeedDialModule } from 'primeng/speeddial';
import { ComponentComponent } from './component/component.component';
@NgModule({
  declarations: [
    AppComponent,
    MultipleDivComponent,
    EditorComponent,
    AddFilesComponent,
    ComponentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgxEditorModule,
    ReactiveFormsModule,
    FormsModule,
    CommonModule,
    BrowserAnimationsModule, ButtonModule,
    AccordionModule,
    SpeedDialModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }



