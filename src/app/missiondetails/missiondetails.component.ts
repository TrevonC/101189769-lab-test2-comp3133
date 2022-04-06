import { Component, OnInit } from '@angular/core';
import { Mission } from '../models/mission';
import { spacexApiService } from '../network/spacexapi.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-missiondetails',
  templateUrl: './missiondetails.component.html',
  styleUrls: ['./missiondetails.component.css']
})
export class MissiondetailsComponent implements OnInit {

  missionlist!:Mission

  constructor(private _spacexApiservice: spacexApiService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this._spacexApiservice.getMissionById((this.route.snapshot.params['id']))
      .subscribe((data) => {
        this.missionlist = data;
      });
  }

}
