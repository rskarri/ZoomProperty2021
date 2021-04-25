import { Injectable } from '@angular/core';
import { Property } from '../models/property'

@Injectable({
  providedIn: 'root'
})
export class PropertyService {

  demand_properties: Property[] = [

     new Property("ABC Venture-1", "Kukkatpally-1", "AAA-1212312-1", "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTJOcXmlzZ4HMYxc7QxkjXulU9uEGKmzusU_O15eWqvBGBq2jr2dLKwykyMBcP4USINcxg&usqp=CAU"),
     new Property("ABC Venture-2", "Kukkatpally-2", "AAA-1212312-1", "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTJOcXmlzZ4HMYxc7QxkjXulU9uEGKmzusU_O15eWqvBGBq2jr2dLKwykyMBcP4USINcxg&usqp=CAU"),
     new Property("ABC Venture-3", "Kukkatpally-3", "AAA-1212312-1", "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTJOcXmlzZ4HMYxc7QxkjXulU9uEGKmzusU_O15eWqvBGBq2jr2dLKwykyMBcP4USINcxg&usqp=CAU"),
     new Property("ABC Venture-4", "Kukkatpally-4", "AAA-1212312-1", "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTJOcXmlzZ4HMYxc7QxkjXulU9uEGKmzusU_O15eWqvBGBq2jr2dLKwykyMBcP4USINcxg&usqp=CAU"),
     new Property("ABC Venture-5", "Kukkatpally-5", "AAA-1212312-1", "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTJOcXmlzZ4HMYxc7QxkjXulU9uEGKmzusU_O15eWqvBGBq2jr2dLKwykyMBcP4USINcxg&usqp=CAU"),

  ]

  popular_properties: Property[]

  constructor() { }

  getAllProperties(){

  }

  getDemandProperties(): Property[]{

    console.log(this.demand_properties);

    return this.demand_properties;

  }

  getRecomendedProperties(){

    return this.popular_properties;

  }
}
