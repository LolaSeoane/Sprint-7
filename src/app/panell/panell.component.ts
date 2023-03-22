import { PanelService } from './../services/panel.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Component,} from '@angular/core';



@Component({
  selector: 'app-panell',
  templateUrl: './panell.component.html',
  styleUrls: ['./panell.component.css']
})

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

