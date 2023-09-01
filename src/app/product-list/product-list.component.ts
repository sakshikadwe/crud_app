import { Component } from '@angular/core';
import { HttpService } from '../service/http.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent {
  productList: any=[];
  constructor(private http:HttpService, private activatedRoute:ActivatedRoute){

  }
  ngOnInit(){
    this.getProduct();
  }
  getProduct(){
    this.http.getData('products').subscribe((response:any) =>{
    if(response && response.length > 0){
      this.productList = response;
    }

    })
  }

  delete(index:number,productObj:any){
    const endPoint = '/product'+productObj.id;
    this.http.deleteData(endPoint).subscribe((el:any) =>{
        this.productList.splice(index,1);
      alert("Data deleted successfully");
    },
    (error) =>{
    
    })
  }
}
