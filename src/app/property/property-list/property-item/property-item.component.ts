import { Component, OnInit, Input } from '@angular/core';
import { Property} from 'src/app/models/property'

@Component({
  selector: 'app-property-item',
  templateUrl: './property-item.component.html',
  styleUrls: ['./property-item.component.css']
})
export class PropertyItemComponent implements OnInit {
@Input() propertyItem: Property

  constructor() { }

  ngOnInit(): void {
  }

}
