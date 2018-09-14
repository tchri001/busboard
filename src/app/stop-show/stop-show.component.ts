import { Component, OnInit } from '@angular/core';
import { BusStopModel } from '../component1/bus-stop-model';
import { ArrivalModel } from '../component1/arrival-model';
import { Input } from '@angular/core';
import { Component1Component } from '../component1/component1.component';

@Component({
  selector: 'app-stop-show',
  templateUrl: './stop-show.component.html',
  styleUrls: ['./stop-show.component.css']
})
export class StopShowComponent implements OnInit 
{
  selectedStop: BusStopModel;

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

  onClick(stop:BusStopModel)
  {
    this.selectedStop = stop;
  }

  constructor() { }

  ngOnInit() {
  }

}
