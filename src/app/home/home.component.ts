

import { Component,OnInit } from '@angular/core';
import { PanelService } from '../services/panel.service';
import { Subject } from 'rxjs';

interface service {
  name: string;
  price: number;
  selected: boolean;
}

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent {
  
  totalSum: number = 0;
  totalpanel = this.panelService.totalp;
  totalpSubject: Subject<number> = new Subject<number>();

  constructor(private panelService: PanelService) {
    
    
      this.sumTotalPrices();
    
  }
 
  services: service[] = [
    { name: 'Una página web', price: 500, selected: false },
    { name: 'Una cosultoría SEO', price: 300, selected: false },
    { name: 'Una campaña de Google Ads', price: 200, selected: false },
  ];

  
  sumTotalPrices() {
    this.totalSum = 0;
    this.totalpanel = this.panelService.totalp;
    console.log(this.totalpanel);
    this.services.forEach((service, index) => {
      if (service.selected) {
        if (index === 0) {
          this.totalSum = service.price + this.totalpanel;
          
        } else {
          this.totalSum += service.price;
        }
      }
    });
  }
  
     
  }
  

  
  
  
  
  








