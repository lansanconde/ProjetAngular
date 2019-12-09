import { Component } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { MissionService } from './mission.service';

import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RouterModule,Routes } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { FormsModule } from '@angular/forms';

import { TopBarComponent } from './top-bar/top-bar.component';

import { MatSliderModule } from '@angular/material/slider';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DomainesComponent } from './domaines/domaines.component';
import { LayoutModule } from '@angular/cdk/layout';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { EditerMissionComponent } from './editer-mission/editer-mission.component';
import { MissionsListComponent } from './missions-list/missions-list.component';
import { AccueilComponent } from './accueil/accueil.component';

const appRoutes: Routes = [

       // { path: 'accueil', component: ProductListComponent },
        { path: '', component: AccueilComponent },
        { path: 'domaines/:domaineId', component: MissionsListComponent },
        { path: 'editer-mission', component: EditerMissionComponent },
        { path: 'missions-list', component: MissionsListComponent },
];

@NgModule({
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    MatSliderModule,
     HttpClientModule,
    BrowserAnimationsModule,
    LayoutModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    RouterModule.forRoot(appRoutes)
  ],
  declarations: [
    AppComponent,
    TopBarComponent,
    DomainesComponent,
    EditerMissionComponent,
    MissionsListComponent,
    AccueilComponent,
  ],
  bootstrap: [ AppComponent ],
  providers :[MissionService]
})
export class AppModule { }
