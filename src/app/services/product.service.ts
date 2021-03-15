import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http' //APi ye bağlanmak için yazmamız gerek.
import { Observable } from 'rxjs';
import { Product } from '../models/product';
import { ListResponseModel } from '../models/listResponseModel';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  apiUrl = 'https://localhost:44314/api/';

  constructor(private hhtpClient: HttpClient) { }

  getProducts(): Observable<ListResponseModel<Product>> {
    let newPath = this.apiUrl + "products/getall"
    return this.hhtpClient.get<ListResponseModel<Product>>(newPath);

  }
  getProductsByCategory(categoryId: number): Observable<ListResponseModel<Product>> {
    let newPath = this.apiUrl + "products/getbycategory?categoryId=" + categoryId
    return this.hhtpClient.get<ListResponseModel<Product>>(newPath);

  }
}


