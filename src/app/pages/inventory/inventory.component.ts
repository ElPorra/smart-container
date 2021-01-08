import { Component, OnInit } from '@angular/core';
import { forkJoin, Observable } from 'rxjs';
import { InventoryService } from 'src/app/services/inventory.service';
import { Product } from '../../services/inventory.models';
import * as moment from 'moment';
import { orderBy } from 'lodash';

@Component({
    selector: 'app-inventory',
    templateUrl: './inventory.component.html',
})
export class InventoryComponent implements OnInit {
    public isLoading = true;
    public inventory: {
        guid: string;
        qty: number;
        product?: Product;
        dailyUsage?: number;
        daysLeft: number;
        lastOrderDate?: moment.Moment;
    }[] = [];

    public sortElement: string = 'daysLeft';
    public sortDirection: 'asc' | 'desc' = 'asc';
    constructor(private inventoryService: InventoryService) {}

    ngOnInit(): void {
        forkJoin([
            this.inventoryService.getInventory(),
            this.inventoryService.getProducts(),
            this.inventoryService.getDailyUsage(),
            this.inventoryService.getLastOrders(),
        ]).subscribe(
            ([inventory, products, dailyUsages, lastOrders]) => {
                this.inventory = inventory.map((element) => {
                    const product = products.find(
                        (product) => product.guid === element.guid
                    );
                    const dailyUsage = dailyUsages.find(
                        (dUsage) => dUsage.guid === element.guid
                    )?.qty;
                    const lastOrderDate = lastOrders.find(
                        (lastOrder) => lastOrder.guid === element.guid
                    )?.date;

                    return {
                        ...element,
                        product,
                        dailyUsage,
                        lastOrderDate: moment(lastOrderDate),
                        daysLeft: element.qty / (dailyUsage || 1),
                    };
                });

                this.inventory = orderBy(this.inventory, ['daysLeft'], ['asc']);
                this.isLoading = false;
            },
            (error) => {
                console.log(error);
            }
        );
    }

    sort(element: string) {
        this.sortDirection =
            element === this.sortElement ? (this.sortDirection === 'asc' ? 'desc' : 'asc') : 'asc';
            this.sortElement = element
            this.inventory = orderBy(
              this.inventory,
              [this.sortElement],
              [this.sortDirection]
          );
    }
}
