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
