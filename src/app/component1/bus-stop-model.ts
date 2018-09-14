import { ArrivalModel } from "./arrival-model";

export class BusStopModel {
    constructor(public id: string, public name: string, public arrivals?: ArrivalModel[]) { }
}