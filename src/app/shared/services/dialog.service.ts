import { ComponentRef, Injectable } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { ComponentType } from '@angular/cdk/overlay';

@Injectable({
  providedIn: 'root',
})
export class DialogService<T> {
  constructor(private matDialog: MatDialog) {}

  open(component: ComponentType<T>, config: MatDialogConfig) {
    return this.matDialog.open(component, {
      ...config,
      panelClass: 'custom-dialog',
    });
  }

  close() {
    this.matDialog.closeAll();
  }
}
