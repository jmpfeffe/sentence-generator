import { Component, OnInit } from '@angular/core';
import { GeneratorValues } from '../data/generator-values';
import { GeneratorService } from '../services/generator.service';

@Component({
  selector: 'app-sentence-generator',
  templateUrl: './sentence-generator.component.html',
  styleUrls: ['./sentence-generator.component.css']
})
export class SentenceGeneratorComponent implements OnInit {

  values: GeneratorValues;
  curSentence: string;
  isLoading = false;

  constructor(
    private generatorService: GeneratorService
  ) { }

  ngOnInit(): void {
    this.initForm();
  }

  initForm() {
    this.values = {
      sentencetype: {
        value: '',
        required: false
      },
      subject: {
        value: '',
        required: true
      },
      verb: {
        value: '',
        required: true
      },
      object: {
        value: '',
        required: true
      },
      tense: {
        value: 'present',
        required: false
      },
      negated: {
        value: false,
        required: false
      }
    };
  }

  reset(): void {
    this.initForm();
    this.curSentence = '';
  }

  validForm(): boolean {
    for (let val of Object.values(this.values)) {
      if (typeof val.value !== 'string') {
        continue;
      }

      if (val.required && !val.value.trim()) {
        return false;
      }
    }

    return true;
  }

  onDropdownSelection(value, field) {
    this.values[field].value = value;
  }

  formQueryMap() {
    const queryParams = {};

    Object.entries(this.values).forEach(([field, val]) => {
      let curVal;
      
      if (typeof val.value === 'string') {
        curVal = val.value.trim();

        if (curVal) {
          queryParams[field] = curVal;
        }
      }
      else {
        curVal = val.value;

        if (curVal) {
          queryParams[field] = field;
        }
      }
    });

    return queryParams;
  }

  genSentence() {
    const queryParams = this.formQueryMap();
    this.isLoading = true;
    this.curSentence = '';

    this.generatorService.generateSentence(queryParams)
      .subscribe(res => {
        if (res['result'] === 'OK' && res['sentence']) {
          this.curSentence = res['sentence'];
        }

        this.isLoading = false;
      },
      err => {
        console.error(err);
        this.isLoading = false;
      });
  }

}
