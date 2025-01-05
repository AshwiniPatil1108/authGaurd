import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Ifairs } from 'src/app/shared/model/fairs';
import { FairsService } from 'src/app/shared/service/fairs.service';

@Component({
  selector: 'app-fair-detail',
  templateUrl: './fair-detail.component.html',
  styleUrls: ['./fair-detail.component.scss']
})
export class FairDetailComponent implements OnInit {
  fairId !:string;
  fairObj! : Ifairs;
    constructor(
      private _routes :ActivatedRoute,
      private _fairService : FairsService
    ) { }
  
    ngOnInit(): void {
      this._routes.params
        .subscribe((params:Params)=>{
        this.fairId = params['fairId'];
        if(this.fairId){
          this._fairService.fetchfair(this.fairId)
            .subscribe(data =>{
              this.fairObj = data
            })
        }
        })
    }

}
