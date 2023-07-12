import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environments/environment';
import {
  BehaviorSubject,
  filter,
  map,
  Observable,
  shareReplay,
  tap,
} from 'rxjs';
import { Dog, Dogs } from '../../features/home/models/dog-kind';

@Injectable()
export class ApiService {
  private dogs: BehaviorSubject<Dog | null> = new BehaviorSubject<Dog | null>(
    null
  );
  dogs$ = this.dogs.asObservable();
  constructor(private http: HttpClient) {}

  getAllDogs(): Observable<Dog> {
    return this.http.get<Dogs>(`${environment.serverUrl}/breeds/list/all`).pipe(
      map((value) => value.message),
      tap((dogs) => {
        this.dogs.next(dogs);
      }),
      shareReplay(1)
    );
  }
  getImgByDogKind(dogKind: string): Observable<Dog> {
    return this.http
      .get<Dogs>(`${environment.serverUrl}/breed/${dogKind}/images`)
      .pipe(
        map((value: any) => value.message),
        shareReplay(1)
      );
  }
}
