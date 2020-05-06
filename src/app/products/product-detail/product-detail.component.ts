import { Component, OnInit } from '@angular/core';
import { IProduct } from '../product';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductService } from '../product.service';

@Component({
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css'],
})
export class ProductDetailComponent implements OnInit {
  pageTitle = 'Product Detail';
  product: IProduct;
  errorMessage: string;

  constructor(private route: ActivatedRoute, private router: Router, private productService: ProductService) { }

  ngOnInit(): void {
    // 2 way to get desire parameter from ActivatedRoute Service:
    // Snapshot approach: only need to get initial value of the paramerter
    // Observable approach: when you expect the parameter to change wihtout leaving a page.

    // read the parameter into a variable
    // paramter provided as a string to the Plus(+) in the start.
    // plus is JS is shortcut to convert a string to a nummeric Id
    const id = +this.route.snapshot.paramMap.get('id');

    this.productService.getProduct(id).subscribe({
      next: product => { this.product = product; },
      error: err => this.errorMessage = err
    });
  }

  onBack(): void {
    // activating a route with code using Router service
    this.router.navigate(['/products']);
  }
}
