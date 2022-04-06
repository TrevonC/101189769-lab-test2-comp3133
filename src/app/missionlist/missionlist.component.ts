import { Component, OnInit } from '@angular/core';
import { spacexApiService } from '../network/spacexapi.service';
import { Mission } from '../models/mission';

@Component({
  selector: 'app-missionlist',
  templateUrl: './missionlist.component.html',
  styleUrls: ['./missionlist.component.css']
})
export class MissionlistComponent implements OnInit {

  missionlist:Mission[]

  constructor(private _spacexApiservice: spacexApiService) { }

  ngOnInit(): void {
    this._spacexApiservice.getMission()
    .subscribe(data =>{this.missionlist = data;})
  }

}
