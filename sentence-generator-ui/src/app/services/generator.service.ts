import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GeneratorService {

  private genSentenceUrl = 'https://lt-nlgservice.herokuapp.com/rest/english/realise';

  constructor(
    private http: HttpClient
  ) { }

  generateSentence(values) {
    return this.http.get(this.genSentenceUrl, {
      params: values
    });
  }
}
