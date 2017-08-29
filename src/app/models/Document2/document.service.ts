import { Injectable, Optional } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable} from 'rxjs/Observable'
import 'rxjs/add/operator/map'
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';


import {Document} from './document.model';
import {LoggerService} from '../../utils/logger.service'

@Injectable()
export class DocumentService{

  constructor(
    private http: Http,
    @Optional() private _logger:LoggerService){}

private baseUrl:string="http://localhost:8082/appartmanager/appartement"

  private _docs:Array<Document> = [
    new Document(1,"Contrat", "/home/local/contrat.doc",new Date(),new Date(),["contrat","salarie"]),
    new Document(2,"Contrat2", "/home/local/contrat2.doc",new Date(),new Date(),["contrat","etudiant"]),
    new Document(3,"Contrat3", "/home/local/contrat3.doc",new Date(),new Date(), ["contrat","collocation"])
  ]

  private _nextID:number = 0
  private _maxDocs:number = 10

  public getAll():Promise<Array<Document>>{
    return Promise.resolve(this._docs);
  }

  public getById(docId: number):Promise<Document>{
    return new Promise((resolve, reject) => {
      var foundDoc = this._docs.find(doc => doc.getId() == docId);
      if(!foundDoc){
        reject("No document found with this ID.")
      }else{
        resolve(foundDoc)
      }
    })
  }

  public createDocument(newDoc:Document){
      return new Promise((resolve, reject) => {
        if(this._docs.length >= this._maxDocs){
          reject("Maximum number of documents reached")
          return
        }
        if(this._logger){
          this._logger.log("Document create: "+newDoc.getNom())
        }
        this._docs.push(newDoc)
        resolve(newDoc)
      });
  }

  public removeDocument(index:number){
    var document:Document = this._docs[index]
    if(this._logger){
      this._logger.log("Document remove id: "+index)
    }
    this._docs.splice(index,1);
    return Promise.resolve(document)
  }

  public getByAppartementId(appartementId:number):Observable<Document[]>{
    let _documents = this.http
    .get(`${this.baseUrl}/${appartementId}/documents`, {headers: this._getHeaders()})
    .map(response => <Document[]> response.json())
    .catch(error => {
      console.log(error);
      return Observable.throw(error);
    });
    //.map(this.mapAppartements);
    return _documents;
  }

  private _getHeaders(){
    let headers = new Headers();
    headers.append('Accept', 'application/json');
    return headers;
  }

}

export let DOCUMENT_SERVICES_PROVIDERS:Array<any> =  [DocumentService, LoggerService]
