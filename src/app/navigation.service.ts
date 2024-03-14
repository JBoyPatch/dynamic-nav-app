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
    {
      displayName: 'Reports',
      iconName: 'assessment',
      userTypes: ['Help Desk', 'Administrator', 'Full Control', 'Download'],
      children: [
        { displayName: 'Usage Reports', iconName: 'bar_chart', route: 'reports/usage', userTypes: ['Administrator', 'Full Control', 'Download'] },
        { displayName: 'Performance Reports', iconName: 'show_chart', route: 'reports/performance', userTypes: ['Administrator', 'Full Control', 'Download'] },
      ],
    },
    {
      displayName: 'Support',
      iconName: 'support',
      userTypes: ['Help Desk', 'Administrator', 'Full Control'],
      children: [
        { displayName: 'Tickets', iconName: 'receipt_long', route: 'support/tickets', userTypes: ['Help Desk', 'Administrator', 'Full Control'] },
        { displayName: 'FAQ', iconName: 'help_outline', route: 'support/faq', userTypes: ['Help Desk', 'Administrator', 'Full Control', 'Read'] },
      ],
    },
    {
      displayName: 'Content Management',
      iconName: 'content_copy',
      userTypes: ['Administrator', 'Full Control'],
      children: [
        { displayName: 'Articles', iconName: 'article', route: 'content/articles', userTypes: ['Administrator', 'Full Control'] },
        { displayName: 'Media Library', iconName: 'perm_media', route: 'content/media', userTypes: ['Administrator', 'Full Control'] },
      ],
    },
    {
      displayName: 'Tools',
      iconName: 'build',
      userTypes: ['Administrator', 'Full Control'],
      children: [
        { displayName: 'Import', iconName: 'publish', route: 'tools/import', userTypes: ['Administrator', 'Full Control'] },
        { displayName: 'Export', iconName: 'get_app', route: 'tools/export', userTypes: ['Administrator', 'Full Control'] },
      ],
    },
    {
      displayName: 'Database Settings',
      iconName: 'storage',
      userTypes: ['Full Control'],
      children: [
        { displayName: 'Backup & Restore', iconName: 'backup', route: '/database-settings/backup', userTypes: ['Full Control'] },
        { displayName: 'User Permissions', iconName: 'security', route: '/database-settings/permissions', userTypes: ['Full Control'] },
        { displayName: 'Performance Tuning', iconName: 'speed', route: '/database-settings/performance', userTypes: ['Full Control'] },
        { displayName: 'Schema Management', iconName: 'view_quilt', route: '/database-settings/schema', userTypes: ['Full Control'] },
      ],
    }
  ];

  constructor() {}

  getNavItems(userType: string): NavItem[] {
    var results = this.navItems.filter(item => item.userTypes.includes(userType));
    return results;
  }
}