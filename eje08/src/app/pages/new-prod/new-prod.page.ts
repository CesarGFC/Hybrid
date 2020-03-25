import { Component, OnInit } from '@angular/core';
import { ProductService } from '../../services/prodservice';
import { FormGroup, FormBuilder, Validator, Validators } from '@angular/forms';


@Component({
  selector: 'app-new-prod',
  templateUrl: './new-prod.page.html',
  styleUrls: ['./new-prod.page.scss'],
})
export class NewProductPage implements OnInit {

  myForm: FormGroup;
  submitted = false;

  constructor(private service: ProductService, private fb: FormBuilder) { }

  ngOnInit() {
    this.myForm = this.fb.group({
      name: ['', Validators.compose([Validators.required, Validators.minLength(2)])],
      descrip: ['', Validators.compose([Validators.required])]
    });
  }

  saveProductService() {
    this.submitted = true;
    if (this.myForm.valid) {
      this.service.newprod({
        name: this.myForm.get('name').value,
        descrip: this.myForm.get('descrip').value,
        active: false
      });
    }
  }
}
