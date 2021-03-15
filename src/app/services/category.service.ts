import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http' //APi ye bağlanmak için yazmamız gerek.
import { Observable } from 'rxjs';
import { ListResponseModel } from '../models/listResponseModel';
import { Category } from '../models/category';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  apiUrl = "https://localhost:44314/api/categories/getall";

  constructor(private hhtpClient: HttpClient) { }

  getCategories(): Observable<ListResponseModel<Category>> {
    return this.hhtpClient.get<ListResponseModel<Category>>(this.apiUrl);

  }
}
