import { PanelService } from './../services/panel.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';



@Component({
  selector: 'app-panell',
  templateUrl: './panell.component.html',
  styleUrls: ['./panell.component.css']
})

/*export class PanellComponent implements OnInit {
  pagesNumber: number = 1;
  languageNumber: number = 1;
  form!: FormGroup;

  constructor(private fb: FormBuilder, private tp: PanelService) { }
  ngOnInit() {
    this.form = this.fb.group({
      pages: [1, Validators.required],
      languages: [1, Validators.required]
    });
  }

  obtainN(): void {
    const pagesN = <HTMLInputElement>document.getElementById("inputPagNumber")
    if (pagesN) {
      this.pagesNumber = parseInt(pagesN.value);

    }
    const langN = <HTMLInputElement>document.getElementById("inputLanguagesNumber")
    if (langN) {
      this.languageNumber = parseInt(langN.value);

    }

    if (this.pagesNumber > 0 || this.languageNumber > 0) {
      const total = this.tp.calculate(this.pagesNumber, this.languageNumber);

    }
  }
}*/

export class PanellComponent {
  form: FormGroup;

  constructor(private fb: FormBuilder, private PanelService: PanelService) {
    this.form = this.fb.group({
      pages: [1, Validators.required],
      languages: [1, Validators.required]
    });

    this.form.valueChanges.subscribe(value => {
      this.getValue();
    });
  }

  getValue() {
    const pages = this.form.get('pages')?.value;
    const languages = this.form.get('languages')?.value;
    this.PanelService.calculate(pages, languages);
  }
}

