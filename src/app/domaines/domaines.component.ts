import { Component } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map, shareReplay } from 'rxjs/operators';
import { domaines } from '../domaines';
import { MissionService } from '../mission.service';

@Component({
  selector: 'app-domaines',
  templateUrl: './domaines.component.html',
  styleUrls: ['./domaines.component.css']
})
export class DomainesComponent {
    domaines = domaines;
    domaine;
  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
    .pipe(
      map(result => result.matches),
      shareReplay()
    );

  constructor(private breakpointObserver: BreakpointObserver,
                private missionService : MissionService) {}

  setDomaineID(domainesId){
   this.domaine = domainesId;
  }
  getDomaineID(){
    return this.domaine;
  }

  onSubmitDomaine(domaineNom){
    this.domaine = this.missionService.addToDomaine(domaineNom);
  }
  getSubmitDomaine(){
      return this.domaine;
  }

}
