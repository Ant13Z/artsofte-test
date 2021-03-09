import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { CarModel } from 'src/app/models/car.model';

@Injectable({
  providedIn: 'root'
})

export class CarService {

  private endPoint = 'http://localhost:80/api/car/';

  constructor(private http: HttpClient) {}

  getList(): Observable<CarModel[]> {
    return this.http.get<CarModel[]>(this.endPoint + 'list');
  }
}
