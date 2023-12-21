/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { ApartementComponent } from './apartment.component';

describe('ApartementComponent', () => {
  let component: ApartementComponent;
  let fixture: ComponentFixture<ApartementComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ApartementComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ApartementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
