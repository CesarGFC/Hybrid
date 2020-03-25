import { Component } from '@angular/core';
import { Prod } from '../models/prod';
import { Router, NavigationExtras } from '@angular/router';
import { ProductService } from '../services/prodservice';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {

  prods: Prod[];

  constructor(private prodService: ProductService, private router: Router) {
    this.prods = this.prodService.getProd();
  }

  viewDetails(prod: Prod) {
    this.prodService.verDetalles(prod);
  }

}
