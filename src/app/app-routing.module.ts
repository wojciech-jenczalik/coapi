import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {ApiDefinitionTextAreaComponent} from './components/api-definition-text-area/api-definition-text-area.component';
import {ApiGraphicalDocumentationComponent} from './components/api-graphical-documentation/api-graphical-documentation.component';
import {ApiErrorComponent} from './components/api-error/api-error.component';
import {ApiValidComponent} from './components/api-valid/api-valid.component';


const routes: Routes = [{
  path: '',
  component: ApiDefinitionTextAreaComponent,
  children: [{
    path: 'documentation/:uuid',
    component: ApiGraphicalDocumentationComponent
  }, {
    path: 'validation/error/:uuid',
    component: ApiErrorComponent
  }, {
    path: 'validation/valid/:uuid',
    component: ApiValidComponent
  }]
}];

@NgModule({
  imports: [RouterModule.forRoot(routes, { relativeLinkResolution: 'legacy' })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
