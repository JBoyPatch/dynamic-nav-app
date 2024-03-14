import { Injectable } from '@angular/core';

export interface NavItem {
  displayName: string;
  disabled?: boolean;
  iconName: string;
  route?: string;
  children?: NavItem[];
  userTypes: string[];
}

@Injectable({
  providedIn: 'root',
})
export class NavigationService {
  navItems: NavItem[] = [
    {
      displayName: 'Dashboard',
      iconName: 'dashboard',
      userTypes: ['Help Desk', 'Administrator', 'Full Control', 'Download', 'Read'],
    },
    {
      displayName: 'Administration',
      iconName: 'admin_panel_settings',
      userTypes: ['Administrator', 'Full Control'],
      children: [
        { displayName: 'Users', iconName: 'group', route: 'admin/users', userTypes: ['Administrator', 'Full Control'] },
        { displayName: 'Settings', iconName: 'settings', route: 'admin/settings', userTypes: ['Administrator', 'Full Control'] },
      ],
    },
  ];

  constructor() {}

  getNavItems(userType: string): NavItem[] {
    var results = this.navItems.filter(item => item.userTypes.includes(userType));
    return results;
  }
}