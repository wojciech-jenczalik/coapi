import { createAction, props } from '@ngrx/store';
import { Coapi } from '../model/coapi';
import {CoapiError} from '../model/coapi-error';

export const parseSpecification = createAction('[Specification] Specification parse',
  props<{ specification: any }>()
);

export const parseSpecificationCompleted = createAction('[Specification] Specification parse completed',
  props<{ coapi: Coapi }>()
);

export const errorOccured = createAction('[Specification] Error occured while validating specification',
  props<{ error: CoapiError }>()
);

export const noError = createAction('[Specification] No error while validating specification');
