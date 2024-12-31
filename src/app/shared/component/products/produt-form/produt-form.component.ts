import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Params } from '@angular/router';
import { Iproducts } from 'src/app/shared/model/products';
import { ProductsService } from 'src/app/shared/service/products.service';
import { UuidService } from 'src/app/shared/service/uuid.service';

@Component({
  selector: 'app-produt-form',
  templateUrl: './produt-form.component.html',
  styleUrls: ['./produt-form.component.scss']
})
export class ProdutFormComponent implements OnInit {
    productId ! : string;
    productObj!: Iproducts
    productForm !: FormGroup;
    isInEditMode: boolean = false;
    updatedbtnFlag : boolean= false
  
    constructor(
      private _routes : ActivatedRoute,
      private _productService : ProductsService,
      private _uuidService : UuidService
    ) { }
  
    ngOnInit(): void {
      this.productForm = new FormGroup({
            pname : new FormControl(null, [Validators.required]),
            pstatus: new FormControl('Candidate', [Validators.required]),
            canReturn:new FormControl('Candidate', [Validators.required]),
          })//17 goto form html 
  
          // console.log(this.productForm.controls['canReturn'].value);//20
          this.productId = this._routes.snapshot.params['productId'];
          if(this.productId){
            this.isInEditMode = true;
  
            this.productObj =this._productService.fetchProduct(this.productId)
  
            this.productForm.patchValue({...this.productObj, canReturn :this.productObj.canReturn ? "Yes" : "No"})
          }
  
          this._routes.queryParams
                      .subscribe((params: Params)=>{
                        console.log(params)
  
                        if(params['canReturn']=== "0"){
                          this.productForm.disable();
                          this.updatedbtnFlag= true;
                        }
                      })
  
    }
    onProductAdd(){
      if(this.productForm.valid){
        let canReturnval =this.productForm.controls['canReturn'].value === "Yes" ? 1 :0;//21
        // console.log(this.productForm,canReturnval);//19
        console.log({...this.productForm.value, canReturn :canReturnval});//22
        let product : Iproducts ={
          ...this.productForm.value, 
          canReturn :canReturnval,
          pid:this._uuidService.generateUuid()
        }
        console.log(product);
  
        this._productService.postProduct(product)
      }
  
    }
  
    onProductUpdate(){
     
        if(this.productForm.valid){
          let updatedObj : Iproducts={
            ...this.productForm.value,
            canReturn:this.productForm.controls['canReturn'].value === "YES" ? 1 : 0,
            pid:this.productId
          }
          console.log(updatedObj)
          this.productForm.reset()
          this._productService.updatedProduct(updatedObj)
        }
  
    
    }
  
  }

