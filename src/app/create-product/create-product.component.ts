import { Component, ElementRef, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { HttpService } from '../service/http.service';
import { ActivatedRoute } from '@angular/router';
import { CanConfirmGuard, IDeactivate } from '../can-confirm.guard';

@Component({
  selector: 'app-create-product',
  templateUrl: './create-product.component.html',
  styleUrls: ['./create-product.component.css']
})
export class CreateProductComponent implements IDeactivate{

  productForm!: FormGroup;
  productId: string | null = null;
  isEdit:boolean =false;

  constructor(private fb:FormBuilder, private http: HttpService, private activatedRoute:ActivatedRoute){
   this.productId = this.activatedRoute.snapshot.paramMap.get('id');
   if(this.productId){
    this.isEdit = true;
   }
  }

  @ViewChild ('saveBtn', {static :true}) saveBtn!: ElementRef; 
  ngOnInit(){
    this.createForm();
    this.getProductDetailsById();

    // console.log('savetn', this.saveBtn.nativeElement);
  }

  createForm(){
    this.productForm = this.fb.group({
      'id' : [''],
      'pname' : [''],
      'category' : [''],
      'price' : [''],
      'stock' : [''],
    })
  }

  save(){
    if(this.isEdit){
      this.updateProductDetails();
    }else{
      this.saveProductDetails();
    }
  }
  saveProductDetails(){
    console.log(this.productForm.value);
    this.http.postData('product',this.productForm.value).subscribe(
      (response:any) => {
        console.log("response", response);
      },
      (error) => {
        console.log(error);
      }
    )
  }

  updateProductDetails(){
    let endPoint = 'product/'+this.productId;
    this.http.putData(endPoint,this.productForm.value).subscribe(
      (response:any) => {
        
      },
      (error) => {

      }
    )
  }

  getProductDetailsById(){
    let endpoint = '/product' +this.productId ;
    this.http.getData(endpoint).subscribe((response:any) => {
      console.log("response received", response);
       this.productForm.patchValue(response);
    },
    (error) => {

    })
  }
  canExit(): boolean {
    if(this.productForm.dirty){
      if(confirm("Do you want to continue?")){
        return true;
      }else{
        return false;
      }
      }else{
        return true;
      }
    }
}


