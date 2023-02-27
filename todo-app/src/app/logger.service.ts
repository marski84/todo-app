import { Injectable, Inject } from '@angular/core';
import { environment } from '../environments/environment.dev';

@Injectable({
  providedIn: 'root',
})
export class LoggerService {
  constructor(@Inject('logger-token') private loggerToken: string) {}

  logTasks() {
    const taskLists = window.localStorage.getItem('taskLists');
    console.log(
      `env: ${environment.envToken}, ${this.loggerToken}: ${taskLists}`
    );
  }
}

// 1. serwis który zapisuje => LocalStorageService
// 2. token abstrakcyjny loggerService,
// tworzysz interfejs AbstractStorageService
// LocalService implementuje AbstractStorageService.
//

// TODO: new InjectionToken('logger-token')
// 'a' === 'a'
// token === token
// https://www.youtube.com/watch?v=CVH0v3EmCfs
