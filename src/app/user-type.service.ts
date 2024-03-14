import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

/**
 * For demonstration, I'll simulate the user type and state.
 * In a real application, this would come from authentication 
 *  & authorization logic.
 */

@Injectable({
  providedIn: 'root',
})
export class UserTypeService {
  private currentUserType = new BehaviorSubject<string>('Administrator');
  currentUserType$ = this.currentUserType.asObservable();

  constructor() {}

  getUserType(): string {
    return this.currentUserType.value;
  }

  setUserType(userType: string) {
    this.currentUserType.next(userType);
  }
}