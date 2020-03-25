import { Component } from '@angular/core';
import { Prod } from '../models/prod';
import { Router, NavigationExtras } from '@angular/router';
import { ProductService } from '../services/prodservice';


@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page {

  prods: Prod[];

  constructor(private productService: ProductService, private router: Router) {
    this.prods = this.productService.getProd();
  }

  viewDetails(prod: Prod) {
    this.productService.verDetalles(prod);
  }
}
