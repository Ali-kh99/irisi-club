import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatDialogModule } from '@angular/material/dialog';

const materials = [
  MatButtonModule,
  MatDialogModule,
  MatInputModule,
  MatIconModule,
  MatProgressSpinnerModule,
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    materials
  ],
  exports: [materials]
})
export class MaterialModule {
}
