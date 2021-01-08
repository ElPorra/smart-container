import { Component, OnInit } from '@angular/core';
import { forkJoin } from 'rxjs';
import { Product } from 'src/app/services/inventory.models';
import { InventoryService } from 'src/app/services/inventory.service';

@Component({
    selector: 'app-products',
    templateUrl: './products.component.html',
    styleUrls: ['./products.component.scss'],
})
export class ProductsComponent implements OnInit {
    public products: Product[] = [];
    public isLoading = true;
    constructor(private inventoryService: InventoryService) {}

    ngOnInit(): void {
        this.inventoryService.getProducts().subscribe(
            (products) => {
                this.products = products;
                this.isLoading = false;
            },
            (error) => {
                console.log(error);
            }
        );
    }
}
