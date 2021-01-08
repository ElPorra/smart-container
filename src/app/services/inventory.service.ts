import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { shareReplay, tap } from 'rxjs/operators';
import { Observable, of } from 'rxjs';
import { Children, Inventory, OrderDate, Product } from './inventory.models';

@Injectable({
    providedIn: 'root',
})
export class InventoryService {
    private products: Product[] = [];

    constructor(private httpClient: HttpClient) {}

    getInventory(): Observable<Inventory[]> {
        this.getProducts().pipe();
        return this.httpClient.get<Inventory[]>(
            environment.apiUrl + '/inventory'
        );
    }

    getProducts(): Observable<Product[]> {
        if (this.products?.length > 0) {
            return of(this.products);
        } else {
            return this.httpClient
                .get<Product[]>(environment.apiUrl + '/products')
                .pipe(
                    tap((products) => {
                        this.products = products;
                    }),
                    shareReplay({ bufferSize: 1, refCount: true })
                );
        }
    }

    getDailyUsage(): Observable<Inventory[]> {
        return this.httpClient
            .get<Inventory[]>(environment.apiUrl + '/daily_usage')
            .pipe(shareReplay({ bufferSize: 1, refCount: true }));
    }

    getChildren(): Observable<Children[]> {
        return this.httpClient
            .get<Children[]>(environment.apiUrl + '/children')
            .pipe(shareReplay({ bufferSize: 1, refCount: true }));
    }

    getLastOrders(): Observable<OrderDate[]> {
        return this.httpClient.get<OrderDate[]>(
            environment.apiUrl + '/last_order_date'
        );
    }
}
