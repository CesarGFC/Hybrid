import { Component } from '@angular/core';
import { Prod } from '../models/prod';
import { ProductService } from '../services/prodservice';
import { Router, NavigationExtras } from '@angular/router';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {
  prods: Prod[] = [];
  search: string;

  constructor(private productService: ProductService, private router: Router) {
    this.prods = this.productService.getProd();
    this.clearSearch();
  }
  private clearSearch(): void {
    this.prods = this.productService.getProd();
  }

  changeStatus(pos: number) {
    this.productService.changeStatus(pos);
  }

  newprod(): void {
    this.router.navigate(['/new-prod']);
  }
  verDetalles(prod: Prod) {
    this.productService.verDetalles(prod);
  }
  filter(): void {
    this.clearSearch();

    if (this.search && this.search.trim()) {
      this.prods = this.prods.filter((prod) => {
        return ((prod.name.toLocaleLowerCase().indexOf(this.search.toLocaleLowerCase()) > -1)
          || (prod.descrip.toLocaleLowerCase().indexOf(this.search.toLocaleLowerCase()) > -1));
      });
    }
  }
}
