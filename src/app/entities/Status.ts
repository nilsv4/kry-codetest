import {Service} from "./Service";

export enum StatusTypes {
  'DOWN' = 'DOWN', 'UP' = 'UP'
}

export interface Status {
  id: string;
  service: Service;
  state: StatusTypes;
  createdAt: string;
}
