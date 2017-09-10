import { Component, ViewChild, Input, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import { Document } from './document.model';
import {DocumentService} from './document.service'
import {DocumentCreateForm} from './document.create'


@Component({
  selector: "document-component",
  templateUrl: "app/models/Document/document.component.html",
  styleUrls: ["app/models/Document/document.component.css"]
})

export class DocumentComponent implements OnInit {

@Input('appartementId') _appartementId:number

@Input('actionCode') _actionCode:string


 //Listing
 private _documents:Array<Document> = [];

 //Creating
  @ViewChild(DocumentCreateForm) _appartCreateForm:DocumentCreateForm;
  private _creationError:string = "";

  constructor(private _documentService:DocumentService,
              private _router:Router,
              private _route:ActivatedRoute){
  }

  public ngOnInit(){
    console.log("Action code:"+this._actionCode)
    this._doRefresh()
  }

    private _createDocument(newDocument:Document){
      switch(this._actionCode){
        case'0':{
          this._documentService.addDocumentByAppartementId(newDocument,this._appartementId)
          .then(document => {
            console.log(document)
            this._creationError=""
            this._appartCreateForm.closeCreateForm()
            this._doRefresh()
          })
          .catch(error => {
            this._creationError = error
          })
          break;
        }
        default: {
          console.error("Unknown action")
          break
        }
      }
    }

    private _removeDocument(index:number){
      this._documentService.removeDocument(index).then(document => {
        console.log(document)
        this._doRefresh()
      })

    }

    private _showDocumentDetails(document:Document){
      this._router.navigate(['./'+document.id],{relativeTo:this._route})
    }

    private _doRefresh(){
      switch(this._actionCode){
        case '0':{
          this._documentService.getByAppartementId(this._appartementId)
          .subscribe(documents => this._documents = documents)
          break
        }
      default: {console.error("Unknown action")
          break
        }
    }
    //  this._documentService.getAll()
    //  .subscribe(documents => this._documents = documents)
    }

    private _showCreateForm(){
      this._appartCreateForm.showCreateForm()
    }
}
