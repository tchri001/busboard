import { ArrivalModel } from "./arrival-model";

export class BusStopModel {
    constructor(public name: string, public arrivals?: ArrivalModel[]) { }
}