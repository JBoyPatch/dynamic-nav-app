import { Component, OnInit } from '@angular/core';
import { NavigationService, NavItem } from '../navigation.service';
import { UserTypeService } from '../user-type.service';

@Component({
  selector: 'app-side-nav',
  templateUrl: './side-nav.component.html',
})
export class SideNavComponent implements OnInit {
  navItems: NavItem[] = [];

  constructor(
    private navigationService: NavigationService,
    private userTypeService: UserTypeService
  ) {}

  ngOnInit() {
    this.userTypeService.currentUserType$.subscribe((userType) => {
      this.navItems = this.navigationService.getNavItems(userType);
    });
  }
} 