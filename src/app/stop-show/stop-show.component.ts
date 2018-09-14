import { Component, OnInit } from '@angular/core';
import { BusStopModel } from '../component1/bus-stop-model';
import { ArrivalModel } from '../component1/arrival-model';
import { Input } from '@angular/core';
import { Component1Component } from '../component1/component1.component';
import { BusStopService } from '../bus-stop.service';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-stop-show',
  templateUrl: './stop-show.component.html',
  styleUrls: ['./stop-show.component.css']
})
export class StopShowComponent implements OnInit 
{
  listOfStops: BusStopModel[];
  selectedStop: BusStopModel;

  onClick(stop:BusStopModel)
  {
    this.selectedStop = stop;
  }

  constructor(private stopService: BusStopService, public activatedRoute: ActivatedRoute) { }  //should be lightweight - or page will take ages to load

  ngOnInit() {    //heavy stuff goes here
    this.listOfStops = this.stopService.getAllStops();
  }

}
