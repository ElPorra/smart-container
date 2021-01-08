import { Component, Input, OnInit } from '@angular/core';
import { Product } from 'src/app/services/inventory.models';

@Component({
    selector: 'app-inventory-card',
    templateUrl: './inventory-card.component.html',
})
export class InventoryCardComponent implements OnInit {
    @Input() public product?: {
        guid: string;
        qty: number;
        product?: Product;
        dailyUsage?: number;
        lastOrderDate?: moment.Moment;
        daysLeft: number;
    };

    constructor() {}

    ngOnInit(): void {}
}
