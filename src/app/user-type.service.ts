import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class UserTypeService {
  private currentUserType: string = 'Read'; // This is a placeholder

  constructor() {}

  getUserType(): string {
    return this.currentUserType;
  }

  setUserType(userType: string) {
    this.currentUserType = userType;
  }
}