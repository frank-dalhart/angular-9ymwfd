import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Product } from '../products';

@Component({
  selector: 'app-product-alerts',
  templateUrl: './product-alerts.component.html',
  styleUrls: ['./product-alerts.component.css']
})

export class ProductAlertsComponent {

  @Input() product1 !: Product;
  @Output() notify = new EventEmitter();

  //so this has to do with getting exported. @input() is a decorator of the product1. it takes an input that is product1. Then something has to do with initializer and definitely assigned in the constructor.
}