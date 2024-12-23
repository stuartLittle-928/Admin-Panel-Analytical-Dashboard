import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataCommunicationService {

  private toggleLeftsideBar: BehaviorSubject<any | null> = new BehaviorSubject<any | null>(true);
  private currentRoute: BehaviorSubject<any | null> = new BehaviorSubject<any | null>(null);

  constructor() { }

  setSideBarStatus(value: boolean | null): void {
    this.toggleLeftsideBar.next(value);
  }
  getSideBarStatus(): BehaviorSubject<boolean | null> {
    return this.toggleLeftsideBar;
  }




  
  // for setting currnet routes... 
  setCurrentRoute(value: boolean | null): void {
    this.currentRoute.next(value);
  }
    // for getting currnet routes... 
    getCurrentRoute(): BehaviorSubject<boolean | null> {
    return this.currentRoute;
  }

  
}
