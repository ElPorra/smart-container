import { Component, OnInit } from '@angular/core';
import * as moment from 'moment';
import { forkJoin } from 'rxjs';
import { Product } from 'src/app/services/inventory.models';
import { InventoryService } from 'src/app/services/inventory.service';
import { orderBy } from 'lodash';

@Component({
    selector: 'app-children',
    templateUrl: './children.component.html',
})
export class ChildrenComponent implements OnInit {
    public isLoading = true;
    public children: {
        id: string;
        first_name: string;
        last_name: string;
        birthdate: string;
        title: string;
        products: Product[];
        next_size_date: string;
        daysLeft: number;
        name: string;
    }[] = [];

    public sortElement: string = 'daysLeft';
    public sortDirection: 'asc' | 'desc' = 'asc';
    constructor(private inventoryService: InventoryService) {}

    ngOnInit(): void {
        forkJoin([
            this.inventoryService.getChildren(),
            this.inventoryService.getProducts(),
        ]).subscribe(
            ([children, products]) => {
                this.children = children.map((element) => {
                    const productsMapped: Product[] = [];
                    element.products.forEach((prod) => {
                        const product = products.find(
                            (product) => product.guid === prod
                        );
                        if (product) {
                            productsMapped.push(product);
                        }
                    });

                    return {
                        ...element,
                        name: element.title ?  element.title : element.first_name + ' ' + element.last_name,
                        products: productsMapped || [],
                        daysLeft: moment(element.next_size_date).diff(
                            moment(),
                            'days'
                        ),
                    };
                });

                this.children = orderBy(
                    this.children,
                    [this.sortElement],
                    [this.sortDirection]
                );
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
            this.children = orderBy(
              this.children,
              [this.sortElement],
              [this.sortDirection]
          );
    }
}
