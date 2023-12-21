import { DetailProductComponent } from './product/detail-product/detail-product.component';
import { HomeComponent } from './home/home.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { ProductComponent } from './product/product.component';
import { ResidenceComponent } from './residence/residence.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ApartmentComponent } from './apartment/apartment.component';
import { DetailApartmentComponent } from './apartment/detail-apartment/detail-apartment.component';
import { FormApartmentComponent } from './form-apartment/form-apartment.component';

const routes: Routes = [
  {path:'', component:HomeComponent},
  {path:'home', redirectTo:'', pathMatch:'full'},
  {path:'product',component:ProductComponent},
  {path:'product/:id',component:DetailProductComponent},
  {path:'residence',component:ResidenceComponent},
  {path:'apartment',component:ApartmentComponent},
  {path:'apartment/:id',component:DetailApartmentComponent},
  {path: 'form', component: FormApartmentComponent},
  {path:'**', component:NotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
