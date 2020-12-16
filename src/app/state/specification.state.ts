import { Coapi } from '../model/coapi';
import {createFeatureSelector, createSelector} from '@ngrx/store';
import {CoapiError} from '../model/coapi-error';

export const SPECIFICATION_FEATURE_NAME = 'coapi';
export const ERROR_FEATURE_NAME = 'error';

export default class SpecificationState {
  [SPECIFICATION_FEATURE_NAME]: Coapi;
  [ERROR_FEATURE_NAME]: CoapiError;
}

export const initializeState = (): SpecificationState => {
    return {
      [SPECIFICATION_FEATURE_NAME]: null,
      [ERROR_FEATURE_NAME]: null
    };
};

const getSpecificationState = createFeatureSelector<SpecificationState>(SPECIFICATION_FEATURE_NAME);

export const getCoapiState = createSelector(getSpecificationState, state => state[SPECIFICATION_FEATURE_NAME]);
export const getError = createSelector(getSpecificationState, state => state[ERROR_FEATURE_NAME]);
