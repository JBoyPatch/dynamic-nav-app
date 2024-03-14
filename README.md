# DynamicNavApp
This project is to demonstrate my knowladge in Angular and general programming practices for Deloitte. This project was created on 3/13/2024 and currently only has about 5 hours of development time put into it.

Thanks so much for your consideration! 
## Logic behind the access controls:
- Dashboard: Accessible by almost everyone, as it provides a general overview suitable for various roles.
- Administration: Restricted to Administrator and Full Control, given its sensitive nature of user and system settings management.
- Reports: Help Desk can view them for support purposes, while Administrator and Full Control have full access. The Download role implies the ability to download reports, a common need for analysis outside the system.
- Support: Aimed at roles involved in user support and problem resolution, with Read access to FAQs for informational purposes extending to more roles.
- Content Management: Limited to roles responsible for managing the system's content, ensuring only authorized changes are made.
- Tools: Specialized functionalities like import/export are reserved for Administrator and Full Control roles, reflecting their potential impact on the system's data integrity.
- Database: Reserved 'back-end' functionality for Full Access account type. 

# Angular Generated Docs: 

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 17.2.3.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.
