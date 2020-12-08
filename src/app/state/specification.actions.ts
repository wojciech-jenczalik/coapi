import { createAction, props } from '@ngrx/store';
import { Coapi } from '../model/coapi';

export const parseSpecification = createAction('[Specification] Specification parse',
  props<{ specification: any }>()
);

export const parseSpecificationCompleted = createAction('[Specification] Specification parse completed',
  props<{ coapi: Coapi }>()
);
