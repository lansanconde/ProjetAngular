import { Component, OnInit } from '@angular/core';
import { MissionService } from '../mission.service';
import { domaines } from '../domaines';
import { Input } from '@angular/core';

import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';
import { mission } from '../ficheMission';
import { ReactiveFormsModule } from '@angular/forms';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-missions-list',
  templateUrl: './missions-list.component.html',
  styleUrls: ['./missions-list.component.css']
})
export class MissionsListComponent implements OnInit {
    items;
     mission;
     domaine;
  constructor(
  private route: ActivatedRoute,
  private router: Router,
  private missionService: MissionService,
  //private editerMissionComponent : EditerMissionComponent
  ) {
     this.items = this.missionService.getItems();
  }

  addToMission(mission) {
      //window.alert('Your product has been added to the cart!');
      this.missionService.addToMission(mission);
   }

  ngOnInit() {
        this.items = this.missionService.getItems();
        this.route.paramMap.subscribe(params => {
            this.domaine = domaines[+params.get('domaineId')];
          });

  }
}
