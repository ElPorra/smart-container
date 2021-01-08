import { Component, Input, OnInit } from '@angular/core';
import { Product } from 'src/app/services/inventory.models';

@Component({
    selector: 'app-product-card',
    templateUrl: './product-card.component.html',
})
export class ProductCardComponent implements OnInit {
    @Input() public product?: Product;

    constructor() {}

    ngOnInit(): void {}
}
