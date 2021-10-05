import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatTableModule} from "@angular/material/table";
import {MatCardModule} from "@angular/material/card";
import {MatButtonModule} from "@angular/material/button";
import {MatIconModule} from "@angular/material/icon";
import {MatDividerModule} from "@angular/material/divider";
import {HttpClientModule} from "@angular/common/http";
import {ServiceService} from "./services/ServiceService";
import {StatusService} from "./services/StatusService";
import { AddNewDialogComponent } from './components/add-new-dialog/add-new-dialog.component';
import {MatDialogModule} from "@angular/material/dialog";
import {MatFormFieldModule} from "@angular/material/form-field";
import {ReactiveFormsModule} from "@angular/forms";
import {MatInputModule} from "@angular/material/input";
import {DeleteDialogComponent} from "./components/delete-dialog/delete-dialog.component";
import { HistoryDialogComponent } from './components/history-dialog/history-dialog.component';

@NgModule({
  declarations: [
    AppComponent,
    AddNewDialogComponent,
    DeleteDialogComponent,
    HistoryDialogComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatTableModule,
    MatCardModule,
    MatButtonModule,
    MatIconModule,
    MatDividerModule,
    MatDialogModule,
    HttpClientModule,
    MatFormFieldModule,
    ReactiveFormsModule,
    MatInputModule
  ],
  providers: [ServiceService, StatusService],
  bootstrap: [AppComponent]
})
export class AppModule { }
