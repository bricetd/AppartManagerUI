import { Injectable, Optional } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable} from 'rxjs/Observable'
import 'rxjs/add/operator/map'
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';


import {Appartement} from './appartement.model';
import {LoggerService} from '../../utils/logger.service'

@Injectable()
export class AppartementService{

private baseUrl:string="http://localhost:8082/appartmanager/appartement"

  constructor(
    private http:Http,
    @Optional() private _logger:LoggerService){}

  //private _appartements:Array<Appartement> = [
  //  new Appartement(1, "Cergy", 10, 1, true, false),
  //  new Appartement(2, "Grigny", 120, 1, false, false),
  //  new Appartement(3, "Montigny", 100, 0, true, true),
  //]

  private _nextID:number = 0
  private _maxAppartements:number = 10

  public getAll():Observable<Appartement[]>{
    let _appartements = this.http
    .get(`${this.baseUrl}`, {headers: this._getHeaders()})
    .map(response => <Appartement[]> response.json())
    .catch(error => {
      console.log(error);
      return Observable.throw(error)
    });
    //.map(this.mapAppartements);
    return _appartements;
  }

  private _getHeaders(){
    let headers = new Headers();
    headers.append('Accept', 'application/json');
    return headers;
  }

  public getById(appartementId: number):Observable<Appartement>{
    let _appartements = this.http
    .get(`${this.baseUrl}/${appartementId}`, {headers: this._getHeaders()})
    .map(response => <Appartement> response.json())
    .catch(error => {
      console.log(error);
      return Observable.throw(error);
    });
    //.map(this.mapAppartements);
    return _appartements;
  }

  public createAppartement(newAppartement:Appartement){
      return new Promise((resolve, reject) => {
        if(this._appartements.length >= this._maxAppartements){
          reject("Maximum number of appartements reached")
          return
        }
        if(this._logger){
          this._logger.log("Appartement create: "+newAppartement.getNom())
        }
        this._appartements.push(newAppartement)
        resolve(newAppartement)
      });
  }

  public removeAppartement(index:number){
    var appartement:Appartement = this._appartements[index]
    if(this._logger){
      this._logger.log("Appartement remove id: "+index)
    }
    this._appartements.splice(index,1);
    return Promise.resolve(appartement)
  }
}

export let APPARTMENT_SERVICES_PROVIDERS:Array<any> =  [AppartementService, LoggerService]
