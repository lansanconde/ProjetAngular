import { Component, OnInit } from '@angular/core';
import { RouterModule,Routes } from '@angular/router';
import { MissionService } from '../mission.service';
import { ReactiveFormsModule } from '@angular/forms';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Input } from '@angular/core';
import { mission } from '../ficheMission';
import { domaines } from '../domaines';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';

@Component({
  selector: 'app-editer-mission',
  templateUrl: './editer-mission.component.html',
  styleUrls: ['./editer-mission.component.css']
})
export class EditerMissionComponent implements OnInit {
   editMission: FormGroup;
   items;
   @Input() mission;
   @Input() domaine;
  constructor(
      private route: ActivatedRoute,
      private router: Router,
      private fb: FormBuilder,
      private missionService : MissionService,
     // private domainesComponent : DomainesComponent
    ) {
          this.items = this.missionService.getItems();
              this.editMission = this.fb.group({
                    mission: ['definiser la mission'],
                    client: ['saisir le nom du client'],
                    ville: ['saisir le nom de la ville'],
                    departement: ['saisir le departement'],
                    anneeDebut: ['saisir année de debut'],
                    anneeFin: ['saisir année fin'],
                    montant: ['saisir le montant'],
                    detail: ['saisir les détailes de la mission'],
                    image: ['donner une image'],
                    domaineID: ['0'],
                    domaineNom : ['Bâtiment']
                  });
     }

  ngOnInit() {

      this.items = this.missionService.getItems();
      this.route.paramMap.subscribe(params => {
          this.domaine = domaines[+params.get('domaineId')];
      });
  }

  ficheMission() {
      this.missionService.addToMission(this.editMission.value) ;
      console.log('Données du formulaire...', this.missionService);
  }
}
