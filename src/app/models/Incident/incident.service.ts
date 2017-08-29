import { Injectable, Optional } from '@angular/core';
import {Incident} from './incident.model';
import {LoggerService} from '../../utils/logger.service'
import {Document} from '../Document/document.model'

@Injectable()
export class IncidentService{

  constructor(@Optional() private _logger:LoggerService){}

  private _incidents:Array<Incident> = [
    new Incident(1,"mon libelle", "ma description", "ma justification", new Date(), new Date(), [new Document(1,"Contrat1", "/home/local/contrat1.incident","","")]),
    new Incident(2,"mon libelle2", "ma description2", "ma justification2", new Date(), new Date(), [new Document(2,"Contrat2", "/home/local/contrat2.incident","","")]),
    new Incident(3,"mon libelle3", "ma description3", "ma justification3", new Date(), new Date(), [new Document(3,"Contrat3", "/home/local/contrat3.incident","","")])
  ]

  private _nextID:number = 0
  private _maxIncidents:number = 3

  public getAll():Promise<Array<Incident>>{
    return Promise.resolve(this._incidents);
  }

  public getById(incidentId: number):Promise<Incident>{
    return new Promise((resolve, reject) => {
      var foundIncident = this._incidents.find(incident => incident.getId() == incidentId);
      if(!foundIncident){
        reject("No incident found with this ID.")
      }else{
        resolve(foundIncident)
      }
    })
  }

  public createIncident(newIncident:Incident){
      return new Promise((resolve, reject) => {
        if(this._incidents.length >= this._maxIncidents){
          reject("Maximum number of incidents reached")
          return
        }
        if(this._logger){
          this._logger.log("Incident create: "+newIncident.getLibelle())
        }
        this._incidents.push(newIncident)
        resolve(newIncident)
      });
  }

  public removeIncident(index:number){
    var incident:Incident = this._incidents[index]
    if(this._logger){
      this._logger.log("Incident remove id: "+index)
    }
    this._incidents.splice(index,1);
    return Promise.resolve(incident)
  }
}

export let INCIDENT_SERVICES_PROVIDERS:Array<any> =  [IncidentService, LoggerService]
