import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Prod } from '../../models/prod';

@Component({
  selector: 'app-detalles',
  templateUrl: './detalles.page.html',
  styleUrls: ['./detalles.page.scss'],
})
export class DetallesPage implements OnInit {

  prod: Prod;
  constructor(private activateRouted: ActivatedRoute, private router: Router) { 
  this.activateRouted.queryParams.subscribe(
    params => {
      this.prod = JSON.parse(params.special);
    }
  );
}
  ngOnInit() {
  }

}
