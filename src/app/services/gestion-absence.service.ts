import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { text } from '@fortawesome/fontawesome-svg-core';
import { BehaviorSubject, Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Absence } from '../entities/absence.model';

const table: string[] = [];

@Injectable({
  providedIn: 'root'
})
export class GestionAbsenceService implements OnInit {
  private listeAbsencesSub: BehaviorSubject<string[]> = new BehaviorSubject(table);
  private idCollegue: string;
  
  constructor(private http : HttpClient) { 
    this.idCollegue = localStorage.getItem("idUtilisateur");
      
  }

  ngOnInit() : void {
  }


  // afficherListeAbsence(idUtilisateur: string) : void {
  //   this.http.get<string[]>(`${environment.baseUrl}${environment.apiVisualisationDesAbsencesByUser}${idUtilisateur}`, {withCredentials: true})
    
  // }

  

  creerAbsence(absence : Absence) : Observable<Object>{
    const httpOptions = {
      headers: new HttpHeaders({
        "Content-Type": "application/json"
      })
    }; 
    
      return this.http.post(`${environment.baseUrl}${environment.apiCreerAbsence}`,
      { 
        idCollegue: this.idCollegue,
        datePremierJourAbsence: absence.datePremierJourAbsence,
        dateDernierJourAbsence: absence.dateDernierJourAbsence,
        typeConge: absence.typeConge,
        commentaireAbsence: absence.commentaireAbsence,
      })
  }


  // Controle si le jour de debut d'absence est à J +2
  checkDay(datePremierJourAbsence: Date) : boolean {
    const dateNow = new Date();
    const datePlusUn = new Date(dateNow.setDate(dateNow.getDate() + 1));
    if(datePlusUn < datePremierJourAbsence) {
      return true;
    } else {
      return false;
    }
  }


  
}