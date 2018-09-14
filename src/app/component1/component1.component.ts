import { Component, OnInit, Input } from '@angular/core';
import { BusStopModel } from './bus-stop-model';
import { ArrivalModel } from './arrival-model';
import { ActivatedRoute } from '@angular/router';
import { BusStopService } from '../bus-stop.service';


@Component({
  selector: 'app-component1',
  templateUrl: './component1.component.html',
  styleUrls: ['./component1.component.css']
})
export class Component1Component implements OnInit 
{

  stop : BusStopModel; 

  constructor(private route: ActivatedRoute, private stopService: BusStopService) { }
  
  ngOnInit() { 
    const id = this.route.snapshot.paramMap.get('id');
    this.stop = this.stopService.getOneStop(id);
  }
}
