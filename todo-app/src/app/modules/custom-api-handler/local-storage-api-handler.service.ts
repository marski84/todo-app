import { Injectable } from '@angular/core';
import { AbstractApiHandler } from './abstract-api-handler';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class LocalStorageApiHandlerService extends AbstractApiHandler {
  constructor() {
    super();
  }

  getData(): Observable<any> {
    this.data.next('');
    return this.data$;
  }
  saveData() {
    this.data$;
    return of(true);
  }
}
