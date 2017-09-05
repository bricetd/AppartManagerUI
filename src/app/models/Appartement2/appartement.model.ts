export class Appartement{

      public constructor(public id:number, public nom:string, public surface:number, public etage:number,
          public hasParking:boolean, public hasCave:boolean){

          }

      public getId():number{
        return this.id
      }

      public getNom():string{
        return this.nom;
      }

      public getSurface():number{
        return this.surface;
      }

      public getEtage():number{
        return this.etage
      }

      public getHasParking():boolean{
        return this.hasParking
      }

      public getHasCave():boolean{
        return this.hasCave
      }
}
