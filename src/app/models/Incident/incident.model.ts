import {Document} from '../Document/document.model'

export class Incident{
  private id:number;
  private libelle:string
  private description:string
  private justification:string
  private date:Date
  private date_fin:Date
  private documents:Array<Document>

  public constructor(id:number, libelle:string, description:string,
          justification:string, date:Date, date_fin:Date, documents:Array<Document>){
            this.date = date
            this.date_fin = date_fin
            this.description = description
            this.id = id
            this.libelle = libelle
            this.justification = justification
            this.documents = documents
          }

  public getId():number{
    return this.id
  }

  public getDescription():string{
    return this.description
  }

  public getLibelle():string{
    return this.libelle
  }

}
