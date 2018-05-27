import { Component, OnInit } from '@angular/core';
import {ProductsService} from '../../services/products.service'

@Component({
  selector: 'app-product-search',
  templateUrl: './product-search.component.html',
  styleUrls: ['./product-search.component.css']
})
export class ProductSearchComponent implements OnInit {

  public products;
  _productFilter : string;

  get productFilter():string{
    return this._productFilter
  }
  set productFilter(value:string){
    this._productFilter=value;
    this.getSearchList();
  }
  constructor(private productsService : ProductsService) { }

  ngOnInit() {
    this.getAllProducts()
  }

  getAllProducts() {
    this.productsService.getAllProducts().subscribe(
      data=>{this.products=data},
      err => console.error('nhi ho rha'),
      ()=>console.log('products loaded')
    );
  }
  
  getSearchList(){
    this.productsService.getFilteredList(this.productFilter).subscribe(
      data=>{this.products=data},
      err => console.error('cannot get list from api'),
      ()=>console.log('filtered customers loaded')
    )
    
  }

}
