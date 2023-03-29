import { PanelService } from './../services/panel.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Component, ViewChild, OnInit } from '@angular/core';
import { AbstractControl } from '@angular/forms';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-panell',
  templateUrl: './panell.component.html',
  styleUrls: ['./panell.component.css']
})
export class PanellComponent{
  form: FormGroup;
  pages: AbstractControl;
  languages: AbstractControl;
  
  constructor(private fb: FormBuilder, private panelService: PanelService, private modalService: NgbModal) {
    this.form = this.fb.group({
      pages: [1, Validators.required],
      languages: [1, Validators.required]
    });

    this.pages = this.form.get('pages') as AbstractControl;
    this.languages = this.form.get('languages') as AbstractControl;

    // Agregar el listener para los cambios de valor en el formulario
    this.form.valueChanges.subscribe(() => {
      this.getValue();
    });
  }

  sumar(control: AbstractControl) {
    const currentValue = control.value;
    control.setValue(currentValue + 1);
  }

  restar(control: AbstractControl) {
    const currentValue = control.value;
    if (currentValue > 1) {
      control.setValue(currentValue - 1);
    }
  }
  
  getValue() {
    const pages = this.pages.value;
    const languages = this.languages.value;
    this.panelService.calculate(pages, languages);
  }
  
  
}



