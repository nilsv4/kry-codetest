import {Component} from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {ServiceService} from "../../services/ServiceService";
import {urlValidator} from "../../form-validators/UrlValidator";
import {MatDialogRef} from "@angular/material/dialog";

@Component({
  selector: 'app-add-new-dialog',
  templateUrl: './add-new-dialog.component.html',
  styleUrls: ['./add-new-dialog.component.scss']
})
export class AddNewDialogComponent {

  form = new FormGroup({
    "name": new FormControl("", [Validators.required, Validators.maxLength(255)]),
    "url": new FormControl("", [Validators.required, Validators.maxLength(255), urlValidator]),
    "port": new FormControl("", [Validators.required, Validators.maxLength(6), Validators.pattern('^[0-9_-]{1,6}$')])
  });

  constructor(private serviceService: ServiceService, private dialogRef: MatDialogRef<AddNewDialogComponent>) {
  }

  onSubmit() {
    if (this.form.valid) {
      const newService = {
        name: this.form.get('name')?.value.toString(),
        url: this.form.get('url')?.value.toString(),
        port: parseInt(this.form.get('port')?.value)
      }

      this.serviceService.add(newService).subscribe();
    }
  }

}
