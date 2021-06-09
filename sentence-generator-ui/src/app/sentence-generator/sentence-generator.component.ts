import { Component, OnInit } from '@angular/core';
import { GeneratorService } from '../services/generator.service';

@Component({
  selector: 'app-sentence-generator',
  templateUrl: './sentence-generator.component.html',
  styleUrls: ['./sentence-generator.component.css']
})
export class SentenceGeneratorComponent implements OnInit {

  values = {
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
    }
  };
  curSentence;
  isLoading = false;

  constructor(
    private generatorService: GeneratorService
  ) { }

  ngOnInit(): void {
  }

  validForm(): boolean {
    for (let val of Object.values(this.values)) {
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
      const curVal = val.value.trim();

      if (curVal) {
        queryParams[field] = curVal;
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
