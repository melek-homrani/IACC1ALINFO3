import { DetailProductComponent } from './components/product/detail-product/detail-product.component';
import { HomeComponent } from './components/home/home.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { ProductComponent } from './components/product/product.component';
import { ResidenceComponent } from './components/residence/residence.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ApartmentComponent } from './components/apartment/apartment.component';
import { DetailApartmentComponent } from './components/apartment/detail-apartment/detail-apartment.component';
import { FormApartmentComponent } from './components/apartment/form-apartment/form-apartment.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'home', redirectTo: '', pathMatch: 'full' },
  {
    path: 'product',
    children: [
      { path: '', component: ProductComponent },
      { path: 'detail/:id', component: DetailProductComponent },
      // { path: 'product/add', component: DetailProductComponent},
    ]
  },
  { path: 'residence', component: ResidenceComponent },
  {
    path: 'apartment',
    children: [
      { path: '', component: ApartmentComponent },
      { path: 'detail/:id', component: DetailApartmentComponent },
      { path: 'add', component: FormApartmentComponent },
    ]
  },
  { path: '**', component: NotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
