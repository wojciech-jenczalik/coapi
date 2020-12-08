import { Coapi } from '../model/coapi';
import {createFeatureSelector, createSelector} from '@ngrx/store';

export const SPECIFICATION_FEATURE_NAME = 'coapi';

export default class SpecificationState {
  [SPECIFICATION_FEATURE_NAME]: Coapi;
}

export const initializeState = (): SpecificationState => {
    return {
      [SPECIFICATION_FEATURE_NAME]: null
    };
};

const getSpecificationState = createFeatureSelector<SpecificationState>(SPECIFICATION_FEATURE_NAME);
export const getCoapiState = createSelector(getSpecificationState, state => state[SPECIFICATION_FEATURE_NAME]);
