import { Injectable } from '@angular/core';
import { BusStopModel } from './component1/bus-stop-model';
import { ArrivalModel } from './component1/arrival-model';
import { lookup } from 'dns';

@Injectable({
  providedIn: 'root'
})
export class BusStopService {

  getAllStops(): BusStopModel[] {
    return this.listOfStops;
  }
  
  getStopData(name: string): ArrivalModel[] {
    const stop = this.listOfStops.find(stop => stop.name === name);
    return stop ? stop.arrivals : undefined;
  }

  stopEynsham: BusStopModel = new BusStopModel(
    'Eynsham Drive / Blithdale Road',
    [
      new ArrivalModel(1, 177, "Peckham"),
      new ArrivalModel(2, 469, "Queen Elizabeth Hospital"),
      new ArrivalModel(10, 177, "Peckham"),
      new ArrivalModel(18, 469, "Queen Elizabeth Hospital"),
      new ArrivalModel(20, 177, "Peckham"),
    ]
  );
  
  stopCassilda:BusStopModel = new BusStopModel(
    'Cassilda Road',
    [
      new ArrivalModel(3, 52, "Brixton"),
      new ArrivalModel(5, 17, "Streatham"),
      new ArrivalModel(9, 52, "Brixton"),
      new ArrivalModel(15, 17, "Streatham"),
      new ArrivalModel(23, 52, "Brixton"),
    ]
  )

  stopBostall:BusStopModel = new BusStopModel(
    'Bostall Gardens',
    [
      new ArrivalModel(9, 99, "Oxford"),
      new ArrivalModel(12, 242, "Birmingham"),
      new ArrivalModel(14, 99, "Oxford"),
      new ArrivalModel(19, 242, "Birmingham"),
      new ArrivalModel(28, 99, "Oxford"),
    ]
  )

listOfStops:BusStopModel[] = [
    this.stopEynsham, 
    this.stopCassilda, 
    this.stopBostall];  

  

  constructor() { }
}
