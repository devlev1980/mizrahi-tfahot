import {Component, OnInit} from '@angular/core';
import {ApiService} from '../../core/services/api.service';
import {filter, Observable, switchMap, tap} from 'rxjs';
import {group} from '@angular/animations';
import {Dog} from './models/dog-kind';
import {FormGroup} from '@angular/forms';
import {DogFormService} from './services/dog-form.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit{
   form!: FormGroup;
   dogs$!: Observable<Dog | null>
   images!: Observable<any>;
   isOnFullScreen: boolean = false;
   numberOfDogs : string[] = [];
   selectedNumber!: Observable<any>;
  constructor(private api: ApiService,private dogFormService: DogFormService) {
  }
 ngOnInit() {
    this.numberOfDogs = [...Array(50)].map((item,index)=> `${index+1}`);
   this.form = this.dogFormService.getDogsForm();
   this.dogs$ = this.api.dogs$;

   this.images = this.form.controls['dogKind'].valueChanges
     .pipe(
       switchMap((value)=> this.api.getImgByDogKind(value)),
     );
   this.selectedNumber = this.form.controls['numberOfCards'].valueChanges;

 }

  onFullScreen() {
    this.isOnFullScreen = true;
  }

  compare() {
    return 0;
  }
}
