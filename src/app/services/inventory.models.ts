export type Product = {
    brand: string;
    Product: string;
    size: string;
    guid: string;
    order_url: string;
    desc: string;
};

export type Children = {
    id: string;
    first_name: string;
    last_name: string;
    birthdate: string;
    products: string[];
    next_size_date: string;
    title: string;
};

export type Inventory = {
    guid: string;
    qty: number;
};

export type OrderDate = {
    guid: string;
    date: string;
};
