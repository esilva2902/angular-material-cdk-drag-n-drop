import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { DragDropModule } from '@angular/cdk/drag-drop';

import { AppComponent } from './app.component';
import { BasicDraggingComponent } from './basic-dragging/basic-dragging.component';
import { HorizontalSortingComponent } from './horizontal-sorting/horizontal-sorting.component';
import { OneAxisDraggingComponent } from './one-axis-dragging/one-axis-dragging.component';

@NgModule({
  declarations: [
    AppComponent,
    BasicDraggingComponent,
    HorizontalSortingComponent,
    OneAxisDraggingComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,

    DragDropModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
