import { Injectable } from '@angular/core';
import { wishlistUrl } from 'src/app/config/api';
import { HttpClient } from '@angular/common/http';
import { Product } from '../models/product';
import { map } from 'rxjs/operators';
@Injectable({ 
  providedIn: 'root'
})
export class WishlistService {

  constructor( private http: HttpClient) { }
getWishList(){
  return this.http.get(wishlistUrl).pipe( map ((result : any []) => {
  let productIds= [] 
  result.forEach(item => productIds.push(item.id))

  return productIds;
  })
  )

}

  addToWishlist(productId) {
    return this.http.post(wishlistUrl, { id: productId })
  }
 
 removeFromWishlist(productId) {
  return this.http.delete(wishlistUrl + '/' + productId);
}

}
