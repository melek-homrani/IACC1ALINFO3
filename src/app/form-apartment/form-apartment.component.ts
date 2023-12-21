import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Residence } from '../core/models/residence';
import { listResidences as residencesList } from '../core/data/data';

const listResidences: Residence[] = residencesList;

@Component({
  selector: 'app-form-apartment',
  templateUrl: './form-apartment.component.html',
  styleUrls: ['./form-apartment.component.css']
})
export class FormApartmentComponent {

  residences!: Residence[];
  apartForm!: FormGroup;
  constructor() {
    this.residences = listResidences;
  }
  ngOnInit(): void {
    this.apartForm = new FormGroup({
      apartNum: new FormControl('', Validators.required),
      floorNum: new FormControl('', [Validators.required, Validators.min(0)]),
      surface: new FormControl('', [Validators.required, Validators.min(0)]),
      terrace: new FormControl('', Validators.required),
      surfaceTerrace: new FormControl(''),
      category: new FormControl('', Validators.required),
      description: new FormControl('', [Validators.required, Validators.minLength(10)]),
      residence: new FormControl('', Validators.required),
    });
  }

  logss() {
    console.log(this.apartForm.value);
  }

  reset() {
    this.apartForm.reset();
  }
}
