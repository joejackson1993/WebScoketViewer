import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatInputModule, MatTableModule, MatToolbarModule, MatButtonModule } from '@angular/material';

@NgModule({
  imports: [CommonModule, MatToolbarModule, MatInputModule, MatTableModule, MatButtonModule],
  exports: [CommonModule, MatToolbarModule, MatInputModule, MatTableModule, MatButtonModule],
})
export class MaterialModule { }
