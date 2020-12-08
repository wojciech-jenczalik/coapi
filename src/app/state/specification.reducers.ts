import {Action, createReducer, on} from '@ngrx/store';
import * as SpecificationActions from './specification.actions';
import SpecificationState, { initializeState } from './specification.state';

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
  console.log('#### IN REDUCER');
  console.log(state);
  console.log(action);
  const xd = specificationReducer(state, action);
  console.log(state);
  return xd;
}
