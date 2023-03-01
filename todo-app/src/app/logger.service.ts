import { Injectable, Inject } from '@angular/core';
import { environment } from '../environments/environment.dev';
import { LOGGER_TOKEN } from './modules/shared/abstract-logger-token';

@Injectable({
  providedIn: 'root',
})
export class LoggerService {
  constructor(@Inject(LOGGER_TOKEN) private loggerToken: string) {}

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
