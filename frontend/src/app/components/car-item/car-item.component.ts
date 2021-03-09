import { Component, Input } from '@angular/core';

import { CarModel } from 'src/app/models/car.model';

@Component({
  selector: 'car-item',
  templateUrl: './car-item.component.html',
  styleUrls: ['./car-item.component.scss']
})

export class CarItemComponent{

  @Input('car') car!: CarModel;

  openPopup(): void {

  }
}
