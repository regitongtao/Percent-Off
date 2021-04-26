import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
  styleUrls: ['home.css']
})
export class HomePage {
  originalPrice: number;
  percentOff: number;
  salesTax: number;
  finalPrice: number;
  savings: number;
  discountedPrice: number;
  tax: number
  
calculatePrice() {
  this.discountedPrice = this.originalPrice * (1 - this.percentOff / 100);
  this.discountedPrice = parseFloat(this.discountedPrice.toFixed(2));
  this.tax = this.discountedPrice * this.salesTax / 100; 
  this.tax = parseFloat(this.tax.toFixed(2));
  this.finalPrice = this.discountedPrice + this.tax;
  this.finalPrice = parseFloat(this.finalPrice.toFixed(2));
  this.savings = (this.originalPrice - this.finalPrice) + this.originalPrice * this.salesTax / 100;
  this.savings = parseFloat(this.savings.toFixed(2));


  }

}
