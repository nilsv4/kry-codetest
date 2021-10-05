import {Service} from "./Service";

export interface Status {
  id: string;
  service: Service;
  state: boolean;
  createdAt: string;
}
