import { Component, Input } from '@angular/core';

@Component({
    selector: 'app-inventory-card',
    template: '',
})
export class InventoryCardComponentMock {
    @Input() public title: string = '';
    @Input() public description: string = '';

}