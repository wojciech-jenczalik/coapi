import {Action, createReducer, on} from '@ngrx/store';
import * as SpecificationActions from './specification.actions';
import SpecificationState, {initializeState} from './specification.state';

const specificationReducer = createReducer(
  initializeState(),
  on(SpecificationActions.parseSpecificationCompleted, (state, action) => {
    return {
      ...state,
      coapi: action.coapi
    };
  })
);

export function reducer(state: SpecificationState | undefined, action: Action) {
  return specificationReducer(state, action);
}
