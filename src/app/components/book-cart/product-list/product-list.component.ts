import { Component, OnInit } from '@angular/core';
import { ProductListService } from '../product-list/product-list.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css'],
})
export class ProductListComponent implements OnInit {
  bookService: ProductListService;
  livros: any[] = [];

  constructor(private _productListService: ProductListService) {
    this.bookService = this._productListService;
  }

  ngOnInit(): void {
    this.bookService.getBook().subscribe((data) => {
      this.livros = data;
    });
  }
}


