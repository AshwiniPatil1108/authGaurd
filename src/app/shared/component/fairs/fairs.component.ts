import { Component, OnInit } from '@angular/core';
import { Ifairs } from '../../model/fairs';
import { FairsService } from '../../service/fairs.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-fairs',
  templateUrl: './fairs.component.html',
  styleUrls: ['./fairs.component.scss']
})
export class FairsComponent implements OnInit {
fairsArr !: Array<Ifairs>
selectedFairId! : string;
  constructor(
    private _fairService : FairsService,
    private _router : Router,
    private _routes : ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.fairsArr = this._fairService.fetchAllfairs();
    this.selectedFairId = this.fairsArr[0].fairId
    this._router.navigate([this.fairsArr[0].fairId],{
      relativeTo : this._routes
    })
  }

}
