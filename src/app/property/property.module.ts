import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PropertyListComponent } from './property-list/property-list.component';
import { PropertyItemComponent } from './property-list/property-item/property-item.component';



@NgModule({
  declarations: [
    PropertyListComponent,
    PropertyItemComponent
  ],
  imports: [
    CommonModule
  ],
  exports:[
    PropertyListComponent,
    PropertyItemComponent
  ]
})
export class PropertyModule { }
