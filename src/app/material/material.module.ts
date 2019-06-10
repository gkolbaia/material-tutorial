import { NgModule } from '@angular/core';
import { MatButtonModule, MatButtonToggleModule, MatTabsModule, MatTableModule, MatIconModule, MatBadgeModule, MatProgressSpinnerModule, MatProgressBarModule, MatToolbarModule, MatSidenavModule, MatMenuModule, MatListModule, MatDividerModule, MatGridListModule, MatExpansionModule, MatCardModule, MatStepperModule, MatFormFieldModule, MatInputModule, MatSelectModule, MatAutocompleteModule, MatCheckboxModule, MatRadioModule, MatDatepickerModule, MatNativeDateModule, MatTooltipModule, MatSnackBarModule, MatDialogModule, MatSortModule, MatPaginatorModule, } from '@angular/material';

const material = [
  MatButtonModule, MatButtonToggleModule, MatTabsModule, MatTableModule, MatIconModule, MatBadgeModule, MatProgressSpinnerModule, MatProgressBarModule, MatToolbarModule, MatSidenavModule, MatMenuModule, MatListModule, MatDividerModule, MatGridListModule, MatExpansionModule, MatCardModule, MatStepperModule, MatFormFieldModule, MatInputModule, MatSelectModule, MatAutocompleteModule, MatCheckboxModule, MatRadioModule, MatDatepickerModule, MatNativeDateModule, MatTooltipModule, MatSnackBarModule, MatDialogModule,MatSortModule,MatPaginatorModule
]
@NgModule({
  imports: [material],
  exports: [material]
})
export class MaterialModule { }
