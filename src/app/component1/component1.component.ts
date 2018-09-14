import { Component, OnInit, Input } from '@angular/core';
import { BusStopModel } from './bus-stop-model';
import { ArrivalModel } from './arrival-model';

@Component({
  selector: 'app-component1',
  templateUrl: './component1.component.html',
  styleUrls: ['./component1.component.css']
})
export class Component1Component implements OnInit 
{

  @Input() stop : BusStopModel; 

  constructor() { }
  
  ngOnInit() { }
}
