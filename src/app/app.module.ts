import { NgModule }      from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { rootRouterConfig } from './app.routes';
import { BrowserModule } from '@angular/platform-browser';
import { DialogComponent } from '@syncfusion/ej2-ng-popups';
import { DropDownListComponent } from '@syncfusion/ej2-ng-dropdowns';
import { AppComponent }  from './app.component';
import { ContentComponent } from './ng-content/content.component';
import { TemplateComponent1 } from './ng-template1/template.component';
import { TemplateComponent2 } from './ng-template2/template.component2';
import { DynamicInjComponent } from './dynamic-injection/dynamicInj.component';
import { FeatureComponent } from './dialog-feature-matrix/dialog.component';
import { ChildComponent }  from './child.component';
import { DirectiveComponent }  from './directives/directive.component';
import { ContentDirective }  from './ng-template2/content-directive1';
import {Newcomponent} from './dynamic-injection/childComponent';

// const appRoutes: Routes = [
//   { path: 'ng-content', component: NgContentComponent }
// ];

@NgModule({
  imports:      [ BrowserModule, RouterModule.forRoot(rootRouterConfig, { useHash: true })],
  declarations: [ AppComponent, DialogComponent, ContentComponent, FeatureComponent, DynamicInjComponent,  ChildComponent,
                 DropDownListComponent, Newcomponent, ContentDirective, TemplateComponent1, TemplateComponent2, DirectiveComponent  ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
