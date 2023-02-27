import { BehaviorSubject, Observable, Subscription } from 'rxjs';

export abstract class AbstractApiHandler {
  protected data = new BehaviorSubject<any>([]);

  readonly data$ = this.data.asObservable();

  abstract getData(): void;
  abstract saveData(data: any): Observable<boolean>;
}
