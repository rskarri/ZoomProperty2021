import { Component, OnInit } from '@angular/core';
import { Property } from 'src/app/models/property';
import { PropertyService } from 'src/app/service/property.service'

@Component({
  selector: 'app-property-list',
  templateUrl: './property-list.component.html',
  styleUrls: ['./property-list.component.css']
})
export class PropertyListComponent implements OnInit {

  demandPropertyList : Property[] = []
  recPropertyList : Property[] = []

  constructor(private propertyService: PropertyService) { }

  ngOnInit(): void {
    this.demandPropertyList = this.propertyService.getDemandProperties();
    this.recPropertyList = this.propertyService.getRecomendedProperties()
    //console.log(this.propertyService.getDemandProperties());
  }

}
