import { Component } from '@angular/core';
import { Residence } from '../core/models/residence';
import {listResidences as residencesList} from '../core/data/data';

const listResidences: Residence[] = residencesList;

@Component({
  selector: 'app-residence',
  templateUrl: './residence.component.html',
  styleUrls: ['./residence.component.css']
})
export class ResidenceComponent {
  listResidences: Residence[] = listResidences;
}
