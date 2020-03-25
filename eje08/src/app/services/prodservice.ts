import { Injectable } from '@angular/core';
import { Prod } from '../models/prod';
import { Router, NavigationExtras } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  private prods: Prod[] = new Array();

  constructor(private router: Router) {
    this.prods.push({
      name: 'Xbox 360',
      descrip: 'Precio $3999, 4GB Almacenamiento, 1 control inalámbrico',
      active: true
    });
    this.prods.push({
      name: 'PlayStation 3',
      descrip: 'Precio $3999, 4GB Almacenamiento, 1 control inalámbrico',
      active: false
    });
  }
  changeStatus(position: number) {
    this.prods[position].active = !this.prods[position].active;
  }
  verDetalles(prod: Prod) {
    const extras: NavigationExtras = {
      queryParams: {
        special: JSON.stringify(prod)
      }
    };

    this.router.navigate(['/detalles'], extras);
  }
  getProd(): Prod[] {
    return this.prods;
  }

  newprod(prod: Prod): void {
    this.prods.push(prod);
  }
}
