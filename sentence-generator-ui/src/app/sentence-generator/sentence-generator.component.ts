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
  }

  constructor(
    public generatorService: GeneratorService
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

  genSentence() {
    console.log('Generating sentence!')
  }

}
