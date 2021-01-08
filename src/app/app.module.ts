import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { ProductsComponent } from './pages/products/products.component';
import { InventoryComponent } from './pages/inventory/inventory.component';
import { InventoryCardComponent } from './components/inventory-card/inventory-card.component';
import { ProductCardComponent } from './components/product-card/product-card.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { HttpClientModule } from '@angular/common/http';
import { ChildCardComponent } from './components/child-card/child-card.component';
import { ChildrenComponent } from './pages/children/children.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    ProductsComponent,
    InventoryComponent,
    InventoryCardComponent,
    ProductCardComponent,
    ChildCardComponent,
    ChildrenComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    ToastrModule.forRoot(),
    FontAwesomeModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
