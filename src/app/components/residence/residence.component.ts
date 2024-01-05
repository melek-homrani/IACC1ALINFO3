import { Component } from '@angular/core';
import { Residence } from 'src/app/core/models/residence';
import {RESIDENCES} from 'src/app/core/data/data';

const listResidences: Residence[] = RESIDENCES;

@Component({
  selector: 'app-residence',
  templateUrl: './residence.component.html',
  styleUrls: ['./residence.component.css']
})
export class ResidenceComponent {
  listResidences: Residence[] = listResidences;
}
