import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { ApiService } from './core/services/api.service';
import { BehaviorSubject, Observable } from 'rxjs';
import { LoaderService } from './services/loader.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  isLoading$!: Observable<boolean>;

  constructor(private api: ApiService, public loaderService: LoaderService) {}

  ngOnInit() {
    this.api.getAllDogs().subscribe();
  }
}
