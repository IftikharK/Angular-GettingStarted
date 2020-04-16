import { Injectable } from '@angular/core';
import { IProduct } from './product';

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

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  getProducts(): IProduct[] {
    return [
      {
        productId: 1,
        productName: 'Leaf Rake',
        productCode: 'GDN-0011',
        releaseDate: 'March 19, 2019',
        description: 'Leaf rake with 48-inch wooden handle.',
        price: 19.95,
        starRating: 3.2,
        imageUrl: './assets/images/leaf_rake.png',
      },
      {
        productId: 2,
        productName: 'Garden Cart',
        productCode: 'GDN-0023',
        releaseDate: 'March 18, 2019',
        description: '15 gallon capacity rolling garden cart',
        price: 32.99,
        starRating: 4.2,
        imageUrl: './assets/images/garden_cart.png',
      },
      {
        productId: 5,
        productName: 'Hammer',
        productCode: 'TBX-0048',
        releaseDate: 'May 21, 2019',
        description: 'Curved claw steel hammer',
        price: 8.9,
        starRating: 4.8,
        imageUrl: './assets/images/hammer.png',
      },
      {
        productId: 8,
        productName: 'Saw',
        productCode: 'TBX-0022',
        releaseDate: 'May 15, 2019',
        description: '15-inch steel blade hand saw',
        price: 11.55,
        starRating: 3.7,
        imageUrl: './assets/images/saw.png',
      },
      {
        productId: 10,
        productName: 'Video Game Controller',
        productCode: 'GMG-0042',
        releaseDate: 'October 15, 2018',
        description: 'Standard two-button video game controller',
        price: 35.95,
        starRating: 4.6,
        imageUrl: './assets/images/xbox-controller.png',
      },
    ];
  }
}
