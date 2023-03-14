import { ThisReceiver } from '@angular/compiler';
import { Component } from '@angular/core';


interface service {
  name: string;
  price: number;
  selected: boolean
}
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  totalSum:number = 0
  optionSelected:boolean = true
  

  services: service[] = [
    { name: 'Una página web', price: 500, selected: false },
    { name: 'Una cosultoría SEO', price: 300, selected: false },
    { name: 'Una campaña de Google Ads', price: 200, selected: false },
  ];
  
  
  sumTotalPrices() {
    this.totalSum = 0;
      this.services.forEach(service => {
        if (service.selected) {
          this.totalSum += service.price;
        }
      });
    }
    
  }







