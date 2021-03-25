import { Component, OnInit } from '@angular/core';
import { Category } from 'src/app/models/category';
import { CategoryService } from 'src/app/services/category.service';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})
export class CategoryComponent implements OnInit {

  categories: Category[] = [];
  currentCategory: Category;

  constructor(private categoryService: CategoryService) { } //Service kullanabilmek için buraya yaz.

  ngOnInit(): void {
    this.getCategories();
  }

  getCategories() {
    this.categoryService.getCategories().subscribe(response => {
      this.categories = response.data
    })
  }

  setCurrentCategory(category: Category) { //html sayfasına yazdığımız fonksiyonu buraya yazıyoruz.
    this.currentCategory = category;
  }

  getCurrentCategoryClass(category: Category) { //seçtiğimiz kategoriyi aktif etmek için.
    if (category == this.currentCategory) {
      return "list-group-item active "
    }
    else return "list-group-item"
  }

  getAllCategoryClass() {   //kategori listesinden seçim yaptığım zaman listeyi getirmek için.
    if (!this.currentCategory) {
      return "list-group-item active"
    } else {
      return "list-group-item"
    }
  }

}
