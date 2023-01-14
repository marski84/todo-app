import { Injectable, Inject } from '@angular/core';
import { environment } from '../environments/envitonment.beta';

@Injectable({
  providedIn: 'root',
})
export class LoggerService {
  constructor(@Inject('logger-token') private loggerToken: string) {}

  envToken!: string;

  logTasks() {
    const taskLists = window.localStorage.getItem('taskLists');
    this.envToken = environment.envToken;
    console.log(`env: ${this.envToken}, ${this.loggerToken}: ${taskLists}`);
  }
}
