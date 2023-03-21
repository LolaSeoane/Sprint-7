
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PanelService {

  public totalp: number = 30;
  public panel:number = 0;

  calculate(pn: number, ln: number): number {
    this.totalp = pn * ln * 30;
    return this.totalp;
  }


}
