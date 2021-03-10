import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http' //APi ye bağlanmak için yazmamız gerek.
import { ProductResponseModel } from '../models/productResponseModel';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  apiUrl = "https://localhost:44314/api/products/getall";

  constructor(private hhtpClient: HttpClient) { }

  getProducts(): Observable<ProductResponseModel> {
    return this.hhtpClient.get<ProductResponseModel>(this.apiUrl);

  }
}


