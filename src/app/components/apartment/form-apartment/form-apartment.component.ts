import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Residence } from 'src/app/core/models/residence';
import { RESIDENCES } from 'src/app/core/data/data';

const listResidences: Residence[] = RESIDENCES;

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

    this.apartForm = new FormGroup({
      apartNum: new FormControl('', [Validators.required, Validators.pattern(/^[0-9]+$/)]),
      floorNum: new FormControl('', [Validators.required, Validators.pattern(/^[0-9]+$/)]),
      surface: new FormControl('', [Validators.required, Validators.pattern(/^[0-9]+$/)]),
      terrace: new FormControl('no', Validators.required),
      surfaceTerrace: new FormControl({ value: '', disabled: true }, [Validators.required, Validators.pattern(/^[0-9]+$/)]),
      category: new FormControl('s+1', Validators.required),
      description: new FormControl('', [Validators.required, Validators.minLength(10)]),
      residence: new FormControl('', Validators.required),
    });

    this.apartForm.get('terrace')?.valueChanges.subscribe(value => {
      if (value === 'yes') {
        this.apartForm.get('surfaceTerrace')?.enable();
      } else {
        this.apartForm.get('surfaceTerrace')?.disable();
      }
    });
  }

  logss() {
    console.log(this.apartForm.value);
  }

  submit() {
    console.log("form submitted");
    console.log(this.apartForm.value);
  }

  reset() {
    this.apartForm.reset();
  }
}
