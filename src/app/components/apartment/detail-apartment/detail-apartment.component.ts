import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-detail-apartment',
  templateUrl: './detail-apartment.component.html',
  styleUrls: ['./detail-apartment.component.css']
})
export class DetailApartmentComponent implements OnInit {
  id!: number;
  constructor(private Act: ActivatedRoute) { }

  ngOnInit() {
    this.id = this.Act.snapshot.params['id'];
    console.log(this.id);
  }


}
