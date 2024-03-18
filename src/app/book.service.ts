import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { tap } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class BookService {
  // books:[{}] = [
  //   {
  //     title:"Book1",
  //     description:"Book 1"
  //   }
  // ]

  //http://localhost:3000/books

  constructor(private http: HttpClient) {}

  getBooks = () => {
    // return this.books
    const baseUrl = 'http://localhost:3000';
    return this.http.get(`${baseUrl}/books`).pipe(tap((data) => data));
  };
}
