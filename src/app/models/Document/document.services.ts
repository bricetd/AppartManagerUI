import { Injectable, Optional } from '@angular/core';
import {Document} from './document.model';
import {LoggerService} from '../../utils/logger.service'

@Injectable()
export class DocumentService{

  constructor(@Optional() private _logger:LoggerService){}
  

  private _docs:Array<Document> = [
    new Document(1,"Contrat", "/home/local/contrat.doc","",""),
    new Document(2,"Contrat2", "/home/local/contrat2.doc","",""),
    new Document(3,"Contrat3", "/home/local/contrat3.doc","","")
  ]

  private _nextID:number = 0
  private _maxDocs:number = 3

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
}

export let DOCUMENT_SERVICES_PROVIDERS:Array<any> =  [DocumentService, LoggerService]
