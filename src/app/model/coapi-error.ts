import {ErrorObject} from 'ajv';

export class CoapiError extends Error {
  errorObjects: ErrorObject[];
  detailedMessage: string;

  constructor(generalMessage: string, detailedMessage: string, errorObjects: ErrorObject[]) {
    super(generalMessage);
    this.detailedMessage = detailedMessage;
    this.errorObjects = errorObjects;
    // Set the prototype explicitly.
    Object.setPrototypeOf(this, CoapiError.prototype);
  }
}
