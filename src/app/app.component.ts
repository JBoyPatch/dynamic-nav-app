import { Component, OnInit } from '@angular/core';
import { UserTypeService } from './user-type.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css', 
})
export class AppComponent implements OnInit {
  title = 'dynamic-nav-app';
  currentUserType!: string;

  constructor(private userTypeService: UserTypeService) {}

  ngOnInit() {
    this.userTypeService.currentUserType$.subscribe((userType) => {
      this.currentUserType = userType;
    });
  }
  
  switchUserType(userType: string) {
    this.userTypeService.setUserType(userType);
  }
}
