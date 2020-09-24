import { Injectable } from '@angular/core';

import { Product} from '../models/product';
@Injectable({
  providedIn: 'root'
})
export class ProductService {

  products:Product[]= [
    new Product (1 , 'prod1 ','this 111 is the first product it is cool ',100),
    new Product (2 , 'prod2 ','this is the first product it is cool ',200),
    new Product (3 , 'prod3 ','this is the first product it is cool ',300),
    new Product (4 , 'prod4 ','this is the first product it is cool ',400),
    new Product (5 , 'prod5 ','this is the first product it is cool ',500),
  ]
  constructor() { }
  getProducts(): Product[] {
    //TO do : populate products from API/localstorage and return observable
    return this.products
  }
}
