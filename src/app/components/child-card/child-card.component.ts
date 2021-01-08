import { Component, Input, OnInit } from '@angular/core';
import { Product } from 'src/app/services/inventory.models';

@Component({
  selector: 'app-child-card',
  templateUrl: './child-card.component.html',
})
export class ChildCardComponent implements OnInit {
  @Input() public child?: {
    id: string;
    name: string;
    first_name: string;
    last_name: string;
    birthdate: string;
    title: string;
    products: Product[];
    next_size_date: string;
    daysLeft: number;
};

constructor() {}

ngOnInit(): void {}
}

