import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MaterialModule } from './shared/material/material.module';
import { ProductComponent } from './components/product/product.component';
import { ResidenceComponent } from './components/residence/residence.component';
import { NavbarComponent } from './shared/navbar/navbar.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { DetailProductComponent } from './components/product/detail-product/detail-product.component';
import { ApartmentComponent } from './components/apartment/apartment.component';
import { ReactiveFormComponent } from './components/reactive-form/reactive-form.component';
import { HomeComponent } from './components/home/home.component';
import { FormApartmentComponent } from './components/apartment/form-apartment/form-apartment.component';
import { FooterComponent } from './shared/footer/footer.component';
import { ItemComponent } from './components/item/item.component';
import { ItemDetailComponent } from './components/item/item-detail/item-detail.component';
import { ItemListComponent } from './components/item/item-list/item-list.component';

@NgModule({
  declarations: [
    AppComponent,
    ProductComponent,
    ResidenceComponent,
    NavbarComponent,
    NotFoundComponent,
    DetailProductComponent,
    ApartmentComponent,
    ReactiveFormComponent,
    HomeComponent,
    FormApartmentComponent,
    FooterComponent,
    ItemComponent,
    ItemDetailComponent,
    ItemListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    FormsModule,
    ReactiveFormsModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
