import { Component } from '@angular/core';
import { UserTypeService } from './user-type.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css', 
})
export class AppComponent {
  title = 'dynamic-nav-app';

  constructor(private userTypeService: UserTypeService) {}

  switchUserType(userType: string) {
    this.userTypeService.setUserType(userType);
  }
}
