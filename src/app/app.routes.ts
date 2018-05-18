import { Routes } from '@angular/router';

import { ContentComponent } from './ng-content/content.component';
import { DynamicInjComponent } from './dynamic-injection/dynamicInj.component';
import { FeatureComponent } from './dialog-feature-matrix/dialog.component';

export const rootRouterConfig: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'ng-content', component: ContentComponent },
  { path: 'dynamic-injection', component: DynamicInjComponent },
  { path: 'dialog-feature-matrix', component: FeatureComponent }
];
