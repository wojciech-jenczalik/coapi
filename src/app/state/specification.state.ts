import { Coapi } from '../model/coapi';

export default class SpecificationState {
  coapi: Coapi;
}

export const initializeState = (): SpecificationState => {
    return {
      coapi: null
    };
};
