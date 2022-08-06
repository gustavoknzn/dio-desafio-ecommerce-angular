import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';

@Injectable()
export class ProductListService {
  books = [
    {
      id: 1,
      name: 'Sherlock Holmes',
      price: 30,
      quantity: 10,
      category: 'Action',
      img: 'img1',
    },
    {
      id: 2,
      name: 'O mundo de Sofia',
      price: 20,
      quantity: 12,
      category: 'Fantasy',
      img: 'img2',
    },
    {
      id: 3,
      name: 'Arsene Lupin',
      price: 80,
      quantity: 50,
      category: 'Classics',
      img: 'img3',
    }
  ];
  private rota = 'url';
  httpOptions = {
    Headers: new HttpHeaders({ 'content-type': 'application/json' }),
  };

  constructor(private _http: HttpClient) { }

  getBook(): Observable<any> {
    return of(this.books);
    return this._http.get(this.rota);
  }
}