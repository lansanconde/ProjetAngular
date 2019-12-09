import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MissionService {
    items = [];
    domaineNom;
  constructor() { }

  addToMission(mission) {
      this.items.push(mission);
    }

    getItems() {
      return this.items;
    }

    clearMission() {
      this.items = [];
      return this.items;
    }
    addToDomaine(domaineNom){
        this.domaineNom = domaineNom;
    }
    getDomaineNom(){
      return this.domaineNom;
    }

}
