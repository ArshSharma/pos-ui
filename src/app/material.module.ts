import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule, MatIconModule, MatCardModule, MatToolbarModule } from '@angular/material';

@NgModule({
  imports: [MatButtonModule, MatIconModule, MatCardModule, MatToolbarModule],
  exports: [MatButtonModule, MatIconModule, MatCardModule, MatToolbarModule],
  
})
export class MaterialModule { }