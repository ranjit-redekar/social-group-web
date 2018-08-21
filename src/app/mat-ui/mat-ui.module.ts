import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {
  MatFormFieldModule,
  MatInputModule,
  MatButtonModule,
  MatIconModule,
  MatDatepickerModule,
  MatSidenavModule,
  MatToolbarModule,
  MatListModule,
  MatCardModule,
  MatDialogModule,
  MatDividerModule,
  MatTabsModule,
  MatExpansionModule,
  MatChipsModule,
  MatSlideToggleModule,
  MatButtonToggleModule,
  MatSelectModule

} from '@angular/material';

const matElements = [
  CommonModule,
  MatFormFieldModule,
  MatInputModule,
  MatButtonModule,
  MatIconModule,
  MatDatepickerModule,
  MatSidenavModule,
  MatToolbarModule,
  MatListModule,
  MatCardModule,
  MatDialogModule,
  MatDividerModule,
  MatTabsModule,
  MatExpansionModule,
  MatChipsModule,
  MatSlideToggleModule,
  MatButtonToggleModule,
  MatSelectModule

];

@NgModule({
  imports: matElements,
  exports: matElements,
  declarations: []
})
export class MatUiModule { }
