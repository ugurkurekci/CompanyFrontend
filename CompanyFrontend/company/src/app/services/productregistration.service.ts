import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import { ProductRegistrationResponseModel } from 'src/app/models/productregistrationResponseModel';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class ProductregistrationService {
  
  apiUrl="https://localhost:5001/api/ProductRegistrations/getall"
  
  constructor(private httpClient:HttpClient) { }

  getProductRegistration():Observable<ProductRegistrationResponseModel>{
    return this.httpClient.get<ProductRegistrationResponseModel>(this.apiUrl)
   
  }
}
