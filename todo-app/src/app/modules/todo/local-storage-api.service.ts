import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { AbstractApiHandler } from '../shared/abstract-api-handler';

@Injectable({
  providedIn: 'root',
})
export class LocalStorageApiService extends AbstractApiHandler {
  constructor() {
    super();
  }

  getData() {
    const data = window.localStorage.getItem('taskLists');
    if (data) {
      this.data.next(JSON.parse(data));
    }
  }

  saveData(taskLists: any): Observable<boolean> {
    const dataToSave = JSON.stringify(taskLists);
    window.localStorage.setItem('taskLists', dataToSave);
    this.getData();

    return of(true);
  }
}
