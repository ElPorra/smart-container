import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ChildrenComponent } from './pages/children/children.component';
import { InventoryComponent } from './pages/inventory/inventory.component';
import { ProductsComponent } from './pages/products/products.component';

const routes: Routes = [
  {
    path: '',
    component: InventoryComponent,
  },
  {
    path: 'children',
    component: ChildrenComponent,
  },
  {
    path: 'products',
    component: ProductsComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
