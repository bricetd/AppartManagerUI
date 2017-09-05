export class Document {

  public constructor(public id:number, public nom:string, public fichier:string, public date_ajout:Date,
    public date_modification:Date){
    //, public tags:Array<string>){
    //  if(!tags){
    //    tags = ["Contrat", "Collocation"];
    //  }
  }
}
