import {Component} from '@angular/core';
import {ServiceService} from "./services/ServiceService";
import {StatusService} from "./services/StatusService";
import {ServiceViewModel} from "./entities/ServiceViewModel";
import {MatDialog} from "@angular/material/dialog";
import {AddNewDialogComponent} from "./components/add-new-dialog/add-new-dialog.component";
import {DeleteDialogComponent} from "./components/delete-dialog/delete-dialog.component";
import {HistoryDialogComponent} from "./components/history-dialog/history-dialog.component";
import {StatusTypes} from "./entities/Status";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent {
  title = 'kry-frontend';
  services: Array<ServiceViewModel> = [];

  constructor(private serviceService: ServiceService, private statusService: StatusService, public dialog: MatDialog) {
    this.getServices();
  }

  public openAddNewDialog() {
    this.dialog.open(AddNewDialogComponent).afterClosed()
      .subscribe(data => {
        if (data === true) {
          this.getServices();
        }
      });
  }

  public openDeleteDialog(serviceId: string) {
    this.dialog.open(DeleteDialogComponent).afterClosed().subscribe(
      data => {
        if (data === true) {
          this.deleteService(serviceId)
        }
      });
  }

  public deleteService(id: string) {
    this.serviceService.delete(id).subscribe(res => {
      this.services = this.services.filter(function( service ) {
        return service.id !== id;
      });
    });
  }

  public openHistoryDialog() {
    this.dialog.open(HistoryDialogComponent);
  }

  private getServices() {
    this.serviceService.getAll().subscribe(services => {
      this.services = [];
      for (let service of services) {
        if (!service.id) {
          return;
        }

        this.statusService.getLatest(service.id).subscribe(status => {
          this.services.push({
            id: service.id  || '',
            name: service.name,
            url: service.url,
            port: service.port,
            state: status.state !== StatusTypes.DOWN,
            createdAt: service.createdAt || '',
            lastCheckedAt: status.createdAt
          });
        }, error => {
          this.services.push({
            id: service.id  || '',
            name: service.name,
            url: service.url,
            port: service.port,
            state: null,
            createdAt: service.createdAt || '',
            lastCheckedAt: null
          });
        });
      }
    });
  }
}
