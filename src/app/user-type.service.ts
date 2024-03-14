import { Injectable } from '@angular/core';

/**
 * For demonstration, I'll simulate the user type. 
 * In a real application, this would come from authentication logic.
 */

@Injectable({
  providedIn: 'root',
})
export class UserTypeService {
  private currentUserType: string = 'Administrator'; 

  constructor() {}

  getUserType(): string {
    return this.currentUserType;
  }

  setUserType(userType: string) {
    this.currentUserType = userType;
  }
}