import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { CarService } from 'src/app/services/car.service';
import { CarModel } from 'src/app/models/car.model';

@Component({
  selector: 'car-list',
  templateUrl: './car-list.component.html',
  styleUrls: ['./car-list.component.scss']
})

export class CarListComponent implements OnInit, OnDestroy {

  carList: CarModel[] = [];
  private subscription!: Subscription;

  constructor(private CarService: CarService) {}

  ngOnInit(): void {
    this.subscription = this.CarService.getList()
      .subscribe((list: CarModel[]) => {
        this.carList = list;
      });
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}
