

/*import { Component,OnInit } from '@angular/core';
import { PanelService } from '../services/panel.service';
import { Subject } from 'rxjs';
import { FormBuilder, FormGroup, FormArray } from '@angular/forms';

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
  myForm!: FormGroup;
  totalSum: number = 0;
  totalpanel = this.panelService.totalp;
  totalpSubject: Subject<number> = new Subject<number>();

  constructor(private panelService: PanelService, private fb: FormBuilder) {
        this.sumTotalPrices();
    
  }
  ngOnInit() {
    this.myForm = this.fb.group({});
  }
 
  services: service[] = [
    { name: 'Una página web', price: 500, selected: false },
    { name: 'Una consultoría SEO', price: 300, selected: false },
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
    
  }*/
  import { Component,OnInit } from '@angular/core';
  import { PanelService } from '../services/panel.service';
  import { FormBuilder, FormGroup, FormArray,FormControl } from '@angular/forms';
  
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
    services: any[] = [
      { name: 'Una página web', price: 500, selected: false },
      { name: 'Una consultoría SEO', price: 300, selected: false },
      { name: 'Una campaña de Google Ads', price: 200, selected: false },
    ];
    myForm: FormGroup;
    totalpanel = this.panelService.totalp;
    constructor(private formBuilder: FormBuilder, private panelService: PanelService) {
      this.myForm = this.formBuilder.group({
        selectedService0: new FormControl(false),
        selectedService1: new FormControl(false),
        selectedService2: new FormControl(false)
      });
    }
    get selectedService0() {
      return this.myForm.get('selectedService0');
    }
  
    get totalSum() {
      let sum = this.services.reduce((acc, curr) => {
        return curr.selected ? acc + curr.price : acc;
      }, 0);
  
      if (this.services[0].selected) {
        sum += this.panelService.totalp;
      }
  
      return sum;
    }
  }

  
  
  
  








