import { NgModule } from '@angular/core';
import {
  MatDialogModule,
  MatFormFieldModule,
  MatCardModule,
  MatInputModule,
  MatIconModule,
  MatButtonModule, MatSnackBarModule, MatCheckboxModule, MatSelectModule, MatToolbarModule
} from "@angular/material";

const MATERIAL_MODULES = [
  MatIconModule,
  MatCardModule,
  MatFormFieldModule,
  MatInputModule,
  MatDialogModule,
  MatButtonModule,
  MatSnackBarModule,
  MatCheckboxModule,
  MatSelectModule,
  MatToolbarModule
]

@NgModule({
  declarations: [],
  exports: [...MATERIAL_MODULES],
  imports: [
  ]
})
export class MaterialModule { }
