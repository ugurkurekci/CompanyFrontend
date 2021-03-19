import { Component, OnInit } from '@angular/core';
import { ProductRegistration } from 'src/app/models/productregistration';

import { ProductRegistrationResponseModel } from 'src/app/models/productregistrationResponseModel';
import { ProductregistrationService } from 'src/app/services/productregistration.service';

@Component({
  selector: 'app-product-registration',
  templateUrl: './product-registration.component.html',
  styleUrls: ['./product-registration.component.css']
})
export class ProductRegistrationComponent implements OnInit {

  ProductRegistration:ProductRegistration[]=[];
  dataLoaded=false;
  
  

  constructor(private productregistrationService:ProductregistrationService) { }

  ngOnInit(): void {
    this.getProductRegistration();

  }

  getProductRegistration(){
this.productregistrationService.getProductRegistration().subscribe(response=>{
  this.ProductRegistration=response.data
  this.dataLoaded=true;
})
  }

}
