import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import {StoreModule} from '@ngrx/store';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ApiDefinitionTextAreaComponent } from './components/api-definition-text-area/api-definition-text-area.component';
import { EffectsModule } from '@ngrx/effects';
import { SpecificationEffects } from './state/specification.effects';
import { ApiGraphicalDocumentationComponent } from './components/api-graphical-documentation/api-graphical-documentation.component';
import {reducers} from './specification.reducers';
import {HIGHLIGHT_OPTIONS, HighlightModule} from 'ngx-highlightjs';
import {ApiErrorComponent} from './components/api-error/api-error.component';
import {ApiValidComponent} from './components/api-valid/api-valid.component';

@NgModule({
  declarations: [
    AppComponent,
    ApiDefinitionTextAreaComponent,
    ApiGraphicalDocumentationComponent,
    ApiErrorComponent,
    ApiValidComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    StoreModule.forRoot(reducers),
    EffectsModule.forRoot([ SpecificationEffects ]),
    HighlightModule,
  ],
  providers: [
    {
      provide: HIGHLIGHT_OPTIONS,
      useValue: {
        fullLibraryLoader: () => import('highlight.js'),
      }
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
