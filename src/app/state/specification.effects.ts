import { Injectable } from '@angular/core';
import {YamlParserService} from '../services/yaml-parser.service';
import {Actions, createEffect, ofType} from '@ngrx/effects';
import * as SpecificationActions from './specification.actions';
import { map } from 'rxjs/operators';

@Injectable()
export class SpecificationEffects {
  constructor(private readonly yaml: YamlParserService, private readonly actions$: Actions) {}

  parseSpecification$ = createEffect(
    () => this.actions$.pipe(
      ofType(SpecificationActions.parseSpecification),
      map((payload) => SpecificationActions.parseSpecificationCompleted(
        { coapi: this.yaml.parseYamlSpec(payload.specification) }
        ))
    ));
}
