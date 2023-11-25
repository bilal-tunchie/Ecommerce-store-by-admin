export interface Store {
    id: String;
    name: String;
}

export interface Billboard {
    id: String;
    label: String;
    imageUrl: String;
}

export interface Category {
    id: String;
    name: String;
    imageUrl: String;
    billboard: Billboard;
}

export interface Product {
    id: String;
    category: Category;
    name: String;
    price: String;
    isFeatured: Boolean;
    size: Size;
    color: Color;
    images: Image[];
}

export interface Size {
    id: String;
    name: String;
    value: String;
}

export interface Color {
    id: String;
    name: String;
    value: String;
}

export interface Image  {
    id: String;
    url: String;
}
