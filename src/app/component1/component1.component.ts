import { Component, OnInit } from '@angular/core';
import { BusStopModel } from './bus-stop-model';
import { ArrivalModel } from './arrival-model';

@Component({
  selector: 'app-component1',
  templateUrl: './component1.component.html',
  styleUrls: ['./component1.component.css']
})
export class Component1Component implements OnInit 
{

  stop: BusStopModel = new BusStopModel(
    'Eynsham Drive / Blithdale Road',
    [
      new ArrivalModel(1, 177, "Peckham"),
      new ArrivalModel(2, 469, "Queen Elizabeth Hospital"),
      new ArrivalModel(10, 177, "Peckham"),
      new ArrivalModel(18, 469, "Queen Elizabeth Hospital"),
      new ArrivalModel(20, 177, "Peckham"),
    ]
  );

  constructor() { }
  
  ngOnInit() { }
}
