/* Import UTILITAIRES */ 
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {RouterModule, Routes} from '@angular/router';
import {AuthInterceptorService} from './auth/auth-interceptor.service';
import {HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http';
import {FormsModule} from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { CommonModule } from '@angular/common';


/* Import COMPOSANTS */
import {AuthComponent} from './auth/auth.component';
import {TechComponent} from './composants/tech/tech.component';
import { NavbarComponent } from './composants/navbar/navbar.component';
import {AbsenceFormComponent } from './composants/absence-form/absence-form.component';
import { VisuAbsencesComponent } from './composants/visu-absences/visu-absences.component';
import { GestionAbsenceComponent } from './composants/gestion-absence/gestion-absence.component';
import { AbsenceService } from './services/absence.service';
import { MenuService } from './services/menu.service';


/* Import PAGES */

// Collegue
import { PageAcceuilCollegueComponent } from './pages/pages-collegue/page-acceuil-collegue/page-acceuil-collegue.component'
import { PageGestionAbsenceCollegueComponent } from './pages/pages-collegue/page-gestion-absence-collegue/page-gestion-absence-collegue.component';
import { PageJoursFeriesCollegueComponent } from './pages/pages-collegue/page-jours-feries-collegue/page-jours-feries-collegue.component'
import { PagePlanningAbsenceCollegueComponent } from './pages/pages-collegue/page-planning-absence-collegue/page-planning-absence-collegue.component';

// Manager
import { PageAcceuilManagerComponent } from './pages/pages-manager/page-acceuil-manager/page-acceuil-manager.component';
import { PageValidationDemandesManagerComponent } from './pages/pages-manager/page-validation-demandes-manager/page-validation-demandes-manager.component';
import { PageGestionAbsenceManagerComponent } from './pages/pages-manager/page-gestion-absence-manager/page-gestion-absence-manager.component';
import { PageVuesSynthetiquesManagerComponent } from './pages/pages-manager/page-vues-synthetiques-manager/page-vues-synthetiques-manager.component';
import { PageJoursFeriesManagerComponent } from './pages/pages-manager/page-jours-feries-manager/page-jours-feries-manager.component';
import { PagePlanningAbsenceManagerComponent } from './pages/pages-manager/page-planning-absence-manager/page-planning-absence-manager.component';

// Administrateur
import { PageAcceuilAdministrateurComponent } from './pages/pages-administrateur/page-acceuil-administrateur/page-acceuil-administrateur.component';
import { PageGestionAbsenceAdministrateurComponent } from './pages/pages-administrateur/page-gestion-absence-administrateur/page-gestion-absence-administrateur.component';
import { PageJoursFeriesAdministrateurComponent } from './pages/pages-administrateur/page-jours-feries-administrateur/page-jours-feries-administrateur.component';
import { PagePlanningAbsenceAdministrateurComponent } from './pages/pages-administrateur/page-planning-absence-administrateur/page-planning-absence-administrateur.component';


// --------- CALENDRIER ANGULAR OFFICIEL -------------- \\
import { FullCalendarModule } from '@fullcalendar/angular';
import dayGridPlugin from '@fullcalendar/daygrid';
import interactionPlugin from '@fullcalendar/interaction';
import { CalendrierAbsencesComponent } from './composants/calendrier-absences/calendrier-absences.component';
import { PageVuesDepartementCollaborateurComponent } from './pages/pages-manager/page-vues-departement-collaborateur/page-vues-departement-collaborateur.component';
import { PageVuesSynthetiquesHistogrammeComponent } from './pages/pages-manager/page-vues-synthetiques-histogramme/page-vues-synthetiques-histogramme.component';
import { GoogleChartsModule } from 'angular-google-charts';
import { SelectBarComponent } from './pages/pages-manager/page-vues-synthetiques-histogramme/select-bar/select-bar.component';
import { DropdownComponent } from './pages/pages-manager/page-vues-synthetiques-histogramme/dropdown/dropdown.component';
import { HistogrammeService } from './services/histogramme.service';
import { VisualisationjoursferiesComponent } from './composants/visualisationjoursferies/visualisationjoursferies.component';
import { JourFerieFormComponent } from './jour-ferie-form/jour-ferie-form.component';
import { ValidationDemandesComponent } from './composants/validation-demandes/validation-demandes.component';
import { SelectbarComponent } from './pages/pages-manager/page-vues-departement-collaborateur/selectbar/selectbar.component';



// --------- !CALENDRIER ANGULAR OFFICIEL! -------------- \\

FullCalendarModule.registerPlugins([ // register FullCalendar plugins
  dayGridPlugin,
  interactionPlugin
]);

@NgModule({
  declarations: [
    AppComponent,
    AuthComponent,
    TechComponent,
    NavbarComponent,
    GestionAbsenceComponent,
    AbsenceFormComponent,
    VisuAbsencesComponent,
    CalendrierAbsencesComponent,
   AbsenceFormComponent,
   ValidationDemandesComponent,
   PageVuesDepartementCollaborateurComponent,
   


    /* Pages COLLEGUE */
    PageAcceuilCollegueComponent,
    PageGestionAbsenceCollegueComponent,
    PageJoursFeriesCollegueComponent,
    PagePlanningAbsenceCollegueComponent,

    /* Pages manager */
    PageAcceuilManagerComponent,
    PageValidationDemandesManagerComponent,
    PageGestionAbsenceManagerComponent,
    PageVuesSynthetiquesManagerComponent,
    PageJoursFeriesManagerComponent,
    PagePlanningAbsenceManagerComponent,

    /* Pages administrateur */
    PageAcceuilAdministrateurComponent,
    PageGestionAbsenceAdministrateurComponent,
    PageJoursFeriesAdministrateurComponent,
    PagePlanningAbsenceAdministrateurComponent,
    PageVuesSynthetiquesHistogrammeComponent,
    PageVuesDepartementCollaborateurComponent,
    SelectBarComponent,
    DropdownComponent,
    VisualisationjoursferiesComponent,
    JourFerieFormComponent,
    ValidationDemandesComponent,
    SelectbarComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    NgbModule,
    FontAwesomeModule,
    FormsModule,
    RouterModule,
    CommonModule,
    FullCalendarModule,
    GoogleChartsModule

  ],
  providers: [{
    provide: HTTP_INTERCEPTORS,
    useClass: AuthInterceptorService,
    multi: true
  }, 
    AbsenceService, 
    MenuService, 
    HistogrammeService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
