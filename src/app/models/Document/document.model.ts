export class Document {
  private id:number
	private nom:string
	private fichier:string
	private date_ajout:string
	private date_modification:string

  public constructor(id:number, nom:string, fichier:string, date_ajout:string, date_modification:string){
    this.id = id
    this.date_ajout = date_ajout
    this.nom = nom
    this.fichier = fichier
    this.date_modification = date_modification
  }

  public getNom():string{
    return this.nom
  }

  public getId():number{
    return this.id
  }
}
