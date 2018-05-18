import { NgModule }      from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { rootRouterConfig } from './app.routes';
import { BrowserModule } from '@angular/platform-browser';
import { DialogComponent } from '@syncfusion/ej2-ng-popups';
import { DropDownListComponent } from '@syncfusion/ej2-ng-dropdowns';
import { AppComponent }  from './app.component';
import { ContentComponent } from './ng-content/content.component';
import { DynamicInjComponent } from './dynamic-injection/dynamicInj.component';
import { FeatureComponent } from './dialog-feature-matrix/dialog.component';
import { ChildComponent }  from './child.component';
import {Newcomponent} from './dynamic-injection/childComponent';

// const appRoutes: Routes = [
//   { path: 'ng-content', component: NgContentComponent }
// ];

@NgModule({
  imports:      [ BrowserModule, RouterModule.forRoot(rootRouterConfig, { useHash: true })],
  declarations: [ AppComponent, DialogComponent, ContentComponent, FeatureComponent, DynamicInjComponent,  ChildComponent,
                 DropDownListComponent, Newcomponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
