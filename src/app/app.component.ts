import { Component, OnInit, ViewChild } from '@angular/core';
import { FormControl } from "@angular/forms";
import { Observable } from "rxjs";
import { map, startWith } from "rxjs/operators";
import { MatSnackBar, MatDialog, MatTable } from '@angular/material';
import { DialogExampleComponent } from './components/dialog-example/dialog-example.component';
import { MatTableDataSource, MatSort, MatPaginator } from "@angular/material";
export interface PeriodicElement {
  name: string;
  position: number;
  weight: number;
  symbol: string;
}
const ELEMENT_DATA: PeriodicElement[] = [
  { position: 1, name: 'Hydrogen', weight: 1.0079, symbol: 'H' },
  { position: 2, name: 'Helium', weight: 4.0026, symbol: 'He' },
  { position: 3, name: 'Lithium', weight: 6.941, symbol: 'Li' },
  { position: 4, name: 'Beryllium', weight: 9.0122, symbol: 'Be' },
  { position: 5, name: 'Boron', weight: 10.811, symbol: 'B' },
  { position: 6, name: 'Carbon', weight: 12.0107, symbol: 'C' },
  { position: 7, name: 'Nitrogen', weight: 14.0067, symbol: 'N' },
  { position: 8, name: 'Oxygen', weight: 15.9994, symbol: 'O' },
  { position: 9, name: 'Fluorine', weight: 18.9984, symbol: 'F' },
  { position: 10, name: 'Neon', weight: 20.1797, symbol: 'Ne' },
];

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  displayedColumns: string[] = ['position', 'name', 'weight', 'symbol'];
  dataSource = new MatTableDataSource(ELEMENT_DATA);
  @ViewChild(MatSort) sort: MatSort;
  @ViewChild(MatPaginator) paginator: MatPaginator;
  private _paginator: MatSort;
  optionsForAutoComplete: string[] = ['Angular', 'React', 'Vue'];
  ObjectOptionsForAutoComplete = [
    { name: 'Angular' },
    { name: 'Angular Material' },
    { name: 'React' },
    { name: 'Vue' }
  ];
  filteredOptionsForAutoComplete: Observable<object[]>;
  myControl = new FormControl();
  openedSideBar = false;
  notifications = 2;
  showSpinner = false;
  selectedValue: string;
  title = 'material-tutorial';
  minDateForDatepicker = new Date();
  maxDateForDatepicker = new Date(2019, 5, 10);
  numbersForScrolling = []
  constructor(
    private _snackBar: MatSnackBar,
    private _matDialog: MatDialog
  ) {
    for (let i = 0; i < 100; i++){
      this.numbersForScrolling.push(i);
    }
  }
  ngOnInit() {
    this.filteredOptionsForAutoComplete = this.myControl.valueChanges.pipe(
      startWith(''),
      map(value => {
        return this._filter(value);
      })
    )
    this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator;
  };
  loadData() {
    this.showSpinner = true;
    setTimeout(() => {
      this.showSpinner = false;
    }, 5000);
  };
  log(state) {
    console.log(state);
  };
  logChange(index) {
    console.log(index);
  };
  displayForAutoComplete(subject) {
    return subject ? subject.name : undefined;
  };
  private _filter(value: string): object[] {
    const filterValue = value.toLowerCase();
    // var x = (this.ObjectOptionsForAutoComplete.filter(res => res['name'].toLowerCase().includes(filterValue)));
    // console.log(x);
    return this.ObjectOptionsForAutoComplete.filter(option => option.name.toLowerCase().includes(filterValue));

  };
  dateFilterForDatepicker = date => {
    const day = date.getDay();
    return day !== 0 && day !== 6;
  };
  openSnackbar(message, action) {
    let snackBarRef = this._snackBar.open(message, action, { duration: 2000 });
    snackBarRef.afterDismissed().subscribe(() => {
      console.log('sada');
    });
    snackBarRef.onAction().subscribe(() => {
      console.log(10);
    })
  };
  openDialog() {
    let dialogRef = this._matDialog.open(DialogExampleComponent, { data: { name: 'Giorgi' } });
    dialogRef.afterClosed().subscribe(result => {
      console.log(result);
    });
  };
  applyTableFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase()
  };
}
