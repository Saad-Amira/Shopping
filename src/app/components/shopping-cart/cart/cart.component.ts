import { Component, OnInit } from '@angular/core';
import { CartItem } from 'src/app/models/cart-item';
import { Product } from 'src/app/models/product';
import { CartService } from 'src/app/services/cart.service';
import {MessengerService} from    'src/app/services/messenger.service'
@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  cartItems = [ //we don't need it bcz we are loading items from json  
   // {id: 1 , productId : 5,productName : "test5", qty : 4,price : 100},
   // {id: 2 , productId : 2,productName : "test2", qty : 3,price : 150},
   // {id: 2 , productId : 4,productName : "test4", qty : 3,price : 150},
    //{id: 3 , productId : 1,productName : "test1", qty : 8,price : 230},
    //{id: 4 , productId : 5,productName : "test5", qty : 9,price : 320},
    //{id: 5 , productId : 3,productName : "test3", qty : 1,price : 80},

    
  ];
  constructor(private msg:MessengerService , private cartService : CartService) { }

   carttotal = 0 

  ngOnInit(): void 
  { 
    this.handleToSubscription();
    this.loadCartItems();

  }
                  

 handleToSubscription(){
   
  this.msg.getMsg().subscribe( (product : Product) =>{
    this.loadCartItems();
   }) 
   }


  loadCartItems(){
this.cartService.getCartItems().subscribe((items : CartItem[]) => {
 this.cartItems = items;
 this.calcCartTotal;
  })
 }
  


//no need now it was replaced
    /* addProductToCart(product : Product){ 
     let productExists = false

     for(let i in this.cartItems){
      if (this.cartItems[i].productId === product.id) {
        this.cartItems[i].qty++ 
        productExists = true
      break; }
     }

     if (! productExists )
     { this.cartItems.push({
      productId : product.id ,
      productName: product.name,
      qty : 1,
      price : product.price
     })

     }
    /**   if (this.cartItems.length===0 )
      { this.cartItems.push({
        productId : product.id ,
        productName: product.name,
        qty : 1,
        price : product.price
       })
      } else {
      for(let i in this.cartItems){
       if (this.cartItems[i].productId === product.id) 
         this.cartItems[i].qty++ 
       else {
        this.cartItems.push({
          productId : product.id ,
          productName: product.name,
          qty : 1,
          price : product.price
        })
       }
      }
    
    this.calcCartTotal();
    }*/
      calcCartTotal() {
     this.carttotal=0 
      this.cartItems.forEach ( item => { 
        this.carttotal += (item.qty * item.price  )
      })    
    }       
      
    }
  
      
