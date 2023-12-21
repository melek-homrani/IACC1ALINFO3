import { Component } from '@angular/core';
import { Apartment } from '../core/models/Appartement';
import { listApartments as apartmentsList, listResidences as residencesList } from '../core/data/data';

const listApartments: Apartment[] = apartmentsList;

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
