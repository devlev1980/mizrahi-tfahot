import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class LoaderService {
  private isLoading: BehaviorSubject<boolean> = new BehaviorSubject(false);
  isLoading$ = this.isLoading.asObservable();
  constructor() {}

  setLoading(isLoading: boolean) {
    this.isLoading.next(isLoading);
  }
}
