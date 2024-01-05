import { Component } from '@angular/core';
import { Apartment } from 'src/app/core/models/apartment';
import { APARTMENTS } from 'src/app/core/data/data';

const listApartments: Apartment[] = APARTMENTS;

@Component({
  selector: 'app-apartment',
  templateUrl: './apartment.component.html',
  styleUrls: ['./apartment.component.css']
})
export class ApartmentComponent {
  apartments!: Apartment[];

  displayedColumns: string[] = ['id', 'appartNum', 'floorNum', 'surface', 'terrace', 'surfaceTerrace', 'category', 'description', 'residence', 'actions'];

  dataSource = this.apartments;

  constructor() {
    this.apartments = listApartments;
    this.dataSource = this.apartments;
  }
}
