import { Component, OnInit } from '@angular/core';
import { IProduct } from '../product';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css'],
})
export class ProductDetailComponent implements OnInit {
  pageTitle = 'Product Detail';
  product: IProduct;

  constructor(private route: ActivatedRoute, private router: Router) {}

  ngOnInit(): void {
    // 2 way to get desire parameter from ActivatedRoute Service:
    // Snapshot approach: only need to get initial value of the paramerter
    // Observable approach: when you expect the parameter to change wihtout leaving a page.

    // read the parameter into a variable
    // paramter provided as a string to the Plus(+) in the start.
    // plus is JS is shortcut to convert a string to a nummeric Id
    let id = +this.route.snapshot.paramMap.get('id'); // plus(+)
    this.pageTitle += `:${id}`;

    this.product = {
      productId: 1,
      productName: 'Leaf Rake',
      productCode: 'GDN-0011',
      releaseDate: 'March 19, 2019',
      description: 'Leaf rake with 48-inch wooden handle.',
      price: 19.95,
      starRating: 3.2,
      imageUrl: 'assets/images/leaf_rake.png',
    };
  }

  onBack(): void {
    // activating a route with code using Router service
    this.router.navigate(['/products']);
  }
}
