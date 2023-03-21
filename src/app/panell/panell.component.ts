import { Component, Output } from '@angular/core';
import { PanelService } from '../services/panel.service';

@Component({
  selector: 'app-panell',
  templateUrl: './panell.component.html',
  styleUrls: ['./panell.component.css']
})

export class PanellComponent {
  pagesNumber:number=0;
  languageNumber:number=0;

  constructor(private tp:PanelService){
      this.obtainN();
    
  }

  obtainN():void{
    let pagesN = <HTMLInputElement> document.getElementById("inputPagNumber")
    if(pagesN){
      this.pagesNumber = parseInt(pagesN.value);
      
    }
    let langN = <HTMLInputElement> document.getElementById("inputLanguagesNumber")
    if(langN){
      this.languageNumber = parseInt(langN.value);
      
    }

    if(this.pagesNumber > 0 && this.languageNumber > 0){
      this.tp.calculate(this.pagesNumber,this.languageNumber);
    }
  }


}
