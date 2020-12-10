export interface Coapi {
  coapi: string;
  servers?: [
    {
      url: string
      description?: string
      port?: number
      size1?: number
    }
  ];
  info: {
    title: string
    description?: string
    termsOfService?: string
    contact?: {
      name?: string
      url?: string
      email?: string
    }
    license?: {
      name: string
      url?: string
    }
    version: string
    coapVersion: string
  };
  paths: [
    {
      url: string
      description?: string
      get?: {
        produces?: Produces
        parameters?: Parameters
        description?: string
        etag?: boolean
        observable?: boolean
        responses?: Responses
      }
      put?: {
        consumes?: Consumes
        produces?: Produces
        parameters?: Parameters
        description?: string
        payload?: Payload
        responses?: Responses
      }
      post?: {
        consumes?: Consumes
        produces?: Produces
        parameters?: Parameters
        description?: string
        payload?: Payload
        responses?: Responses
      }
      delete?: {
        produces?: Produces
        parameters?: Parameters
        description?: string
        responses?: Responses
      }
    }
  ];
}
export type Content = {
  format: string
  schema?: string
  examples?: {
    description?: string
    value?: string
  }[]
}[];
export interface Payload {
  description?: string;
  content?: Content;
  required?: boolean;
}
export type Responses = {
  code?: string
  description?: string
  content?: Content
}[];
export type Consumes = {
  type: string
}[];
export type Produces = {
  type: string
}[];
export type Parameters = {
  name: string,
  in: string,
  description?: string,
  required?: string,
  type?: string,
}[];
