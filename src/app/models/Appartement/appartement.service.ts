import { Injectable, Optional } from '@angular/core';
import { Http, Response, Headers } from '@angular/http';
import { Observable} from 'rxjs/Observable'
import 'rxjs/add/operator/map'
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';
import 'rxjs/add/operator/toPromise';


import {Appartement} from './appartement.model';
import {LoggerService} from '../../utils/logger.service'

@Injectable()
export class AppartementService{

private baseUrl:string="http://localhost:8082/appartmanager/appartement"

  constructor(
    private http:Http,
    @Optional() private _logger:LoggerService){}

  private _appartements:Array<Appartement> = [
    new Appartement(1, "Cergy", 10, 1, true, false),
    new Appartement(2, "Grigny", 120, 1, false, false),
    new Appartement(3, "Montigny", 100, 0, true, true),
  ]

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

  public getById(appartementId: number):Observable<Appartement>{
    let _appartements = this.http
    .get(`${this.baseUrl}/${appartementId}`, {headers: this._getHeaders()})
    .map(response => <Appartement> response.json())
    .catch(error => {
      console.log(error);
      return Observable.throw(error);
    });
    return _appartements;
  }

  public createAppartement(newAppartement:Appartement){
      let body = JSON.stringify(newAppartement);
      return this.http
        .post(`${this.baseUrl}`, body, {headers: this._getHeaders()})
        .toPromise()
        .then(this._extractData)
        .catch(this._handleError);
  }

  public removeAppartement(index:number){
    let delHeaders = new Headers();
    return this.http
      .delete(`${this.baseUrl}/${index}`)
      .toPromise()
      .then(this._extractData)
      .catch(this._handleError);
  }

  private _getHeaders(){
    let headers = new Headers();
    headers.append('Accept', 'application/json');
    headers.append('Content-Type','application/json');
    return headers;
  }

  private _extractData(res:Response){
    let body = res.json();
    console.log("Appartement create: "+res.json())
    return body || {};
  }

  private _handleError(error: any){
    console.error('An error occurred', error);
    return Promise.reject(error.message || error);
  }
}

export let APPARTMENT_SERVICES_PROVIDERS:Array<any> =  [AppartementService, LoggerService]
