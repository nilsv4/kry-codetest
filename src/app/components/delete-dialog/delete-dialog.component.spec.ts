import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddNewDialogComponent } from './delete-dialog.component';

describe('AddNewDialogComponent', () => {
  let component: AddNewDialogComponent;
  let fixture: ComponentFixture<AddNewDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddNewDialogComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddNewDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
