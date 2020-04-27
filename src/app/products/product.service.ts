/* @Injectable() decorator use for service metadata.

  *Root Injector* Recommended way
    -> service is available throughout the application
  @Injectable({
    providedIn: 'root' // Registering a service with root injecter
  })
  *Component Injector*
    -> service is available only to that component and its child(nested) components
  @Component({
    templateUrl: './product-list.component.html',
    providers: [ProductsService]  // Rergister service for a specific component
  })
*/

import { Injectable } from '@angular/core';
import { IProduct } from './product';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, tap, map, filter } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  // this url we can use when want to access data from product.json file
  // private productUrl = 'api/products/products.json';

  // The HttpClientInMemoryWebApiModule module intercepts HTTP requests
  // and returns simulated server responses.
  // Remove it when a real server is ready to receive requests.
  private productUrl = 'api/products';

  constructor(private http: HttpClient) { }

  getProducts(): Observable<IProduct[]> {
    return this.http.get<IProduct[]>(this.productUrl).pipe(
      tap(data => console.log('All: ' + JSON.stringify(data))), // without transform tap operators great to use for dubugging or logging
      catchError(this.handleError) // catchError -> catches any error
    );
  }

  getProductById(id: number): Observable<IProduct | undefined> {
    return this.getProducts().pipe(
      map((products: IProduct[]) => products.find(p => p.productId === id)),
      tap(data => console.log('fetched by productId: ' + JSON.stringify(data))),
      catchError(this.handleError)
    );
  }
  private handleError(err: HttpErrorResponse) {
    // in a real world app, we may send the server to some remote logging infrastructure
    // instead of just logging it to the console
    let errorMessage = '';
    if (err.error instanceof ErrorEvent) {
      // A client-side or network error occurred. Handle it accordingly.
      errorMessage = `An error occurred: ${err.error.message}`;
    } else {
      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong,
      errorMessage = `Server returned code: ${err.status}, error message is: ${err.message}`;
    }
    console.error(errorMessage);
    return throwError(errorMessage);
  }

}
