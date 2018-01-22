import { Component, Input } from '@angular/core';
import { Product } from '../../models/product';
import { ShoppingCartService } from '../../services/shopping-cart.service';

@Component({
  selector: 'product-quantity',
  templateUrl: './product-quantity.component.html',
  styleUrls: ['./product-quantity.component.css']
})
export class ProductQuantityComponent {

  constructor(private cartService: ShoppingCartService) { }

  @Input('product') product: Product;
  @Input('shopping-cart') shoppingCart;

  addToCart() {
    this.cartService.addToCart(this.product);
  }

  removeFromCart() {
    this.cartService.removeFromCart(this.product);
  }

  getQuantity() {
    if (!this.shoppingCart) return 0;

    let item = this.shoppingCart.items[this.product.$key];

    return item ? item.quantity : 0;
  }

}

