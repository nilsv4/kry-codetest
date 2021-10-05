import {Injectable} from "@angular/core";
import {ResourceService} from "./BaseService";
import {Service} from "../entities/Service";
import {HttpClient} from "@angular/common/http";
import {Status} from "../entities/Status";

@Injectable({
  providedIn: 'root'
})
export class StatusService extends ResourceService<Status>{

  constructor(protected httpClient: HttpClient ) {
    super(httpClient);
  }

  getResourceUrl(): string {
    return 'status';
  }
}
