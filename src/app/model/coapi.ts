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
        description?: string
        etag?: boolean
        observable?: boolean
        responses?: Responses
      }
      put?: {
        description?: string
        payload?: Payload
        responses?: Responses
      }
      post?: {
        description?: string
        payload?: Payload
        responses?: Responses
      }
      delete?: {
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
};
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
