import {Injectable} from "@angular/core";
import {ResourceService} from "./BaseService";
import {Service} from "../entities/Service";
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class ServiceService extends ResourceService<Service>{

  constructor(protected httpClient: HttpClient ) {
    super(httpClient);
  }

  getResourceUrl(): string {
    return 'service';
  }
}
