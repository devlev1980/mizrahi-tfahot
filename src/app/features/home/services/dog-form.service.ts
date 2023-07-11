import { Injectable } from '@angular/core';
import {FormBuilder, FormGroup} from '@angular/forms';

@Injectable()
export class DogFormService {
  dogForm!: FormGroup;
  constructor(private fb: FormBuilder) {
    this.initForm();
  }

  initForm(){
    this.dogForm = this.fb.group({
      dogKind: [''],
      numberOfCards: ['']
    })
  }
  getDogsForm(){
    return this.dogForm as FormGroup;
  }
}
