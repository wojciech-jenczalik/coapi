import {Injectable} from '@angular/core';
import {Coapi} from '../model/coapi';
import Ajv, {ValidateFunction} from 'ajv';
import {CoapiError} from '../model/coapi-error';

@Injectable({
  providedIn: 'root'
})
export class CoapiValidationService {
  ajv = new Ajv();
  validator: ValidateFunction = this.ajv.compile(schema);

  validate(coapi: Coapi): void {
    const valid = this.validator(coapi);
    if (!valid) {
      throw new CoapiError('Error while validating schema.', '', this.validator.errors);
    }
  }
}

const schema = {
  definitions: {
    content: {
      type: 'array',
      items: {
        type: 'object',
        properties: {
          format: {
            type: 'string',
            enum: [
              'text/plain;',
              'charset=utf-8',
              'application/link-format',
              'application/xml',
              'application/octet-stream',
              'application/exi',
              'application/json',
              '0',
              '40',
              '41',
              '42',
              '47',
              '50'
            ]
          },
          schema: {
            type: 'string'
          },
          examples: {
            type: 'array',
            items: {
              type: 'object',
              properties: {
                description: {
                  type: 'string'
                },
                value: {
                  type: 'string'
                }
              }
            }
          }
        },
        additionalProperties: false,
        required: [
          'format'
        ]
      }
    },
    payload: {
      type: 'object',
      properties: {
        description: {
          type: 'string'
        },
        content: {
          $ref: '#/definitions/content'
        },
        required: {
          type: 'boolean'
        }
      },
      additionalProperties: false
    },
    responses: {
      type: 'array',
      items: {
        type: 'object',
        properties: {
          code: {
            type: 'string',
            pattern: '([245]\\.[0-9][0-9])|(default)'
          },
          description: {
            type: 'string'
          },
          content: {
            $ref: '#/definitions/content'
          }
        },
        additionalProperties: false
      }
    },
    produces: {
      type: 'array',
      items: {
        type: 'string',
        enum: [
          'text/plain;',
          'charset=utf-8',
          'application/link-format',
          'application/xml',
          'application/octet-stream',
          'application/exi',
          'application/json',
          '0',
          '40',
          '41',
          '42',
          '47',
          '50'
        ]
      }
    },
    consumes: {
      type: 'array',
      items: {
        type: 'string',
        enum: [
          'text/plain;',
          'charset=utf-8',
          'application/link-format',
          'application/xml',
          'application/octet-stream',
          'application/exi',
          'application/json',
          '0',
          '40',
          '41',
          '42',
          '47',
          '50'
        ]
      }
    },
    parameters: {
      type: 'array',
      items: {
        type: 'object',
        properties: {
          name: {
            type: 'string'
          },
          in: {
            type: 'string',
            enum: [
              'path',
              'query',
              'body'
            ]
          },
          description: {
            type: 'string'
          },
          required: {
            type: 'boolean'
          },
          type: {
            type: 'string',
            enum: [
              'integer',
              'string',
              'boolean',
              'object',
              'array'
            ]
          }
        },
        required: [
          'name',
          'in'
        ],
        additionalProperties: false
      }
    }
  },
  type: 'object',
  properties: {
    coapi: {
      type: 'string'
    },
    servers: {
      type: 'array',
      items: {
        type: 'object',
        properties: {
          url: {
            type: 'string'
          },
          description: {
            type: 'string'
          },
          port: {
            type: 'integer',
            minimum: 0,
            maximum: 65535
          },
          size1: {
            type: 'integer',
            minimum: 0
          }
        },
        required: [
          'url'
        ],
        additionalProperties: false
      },
      minItems: 1,
      uniqueItems: true
    },
    info: {
      type: 'object',
      properties: {
        title: {
          type: 'string'
        },
        description: {
          type: 'string'
        },
        termsOfService: {
          type: 'string'
        },
        contact: {
          type: 'object',
          properties: {
            name: {
              type: 'string'
            },
            url: {
              type: 'string'
            },
            email: {
              type: 'string',
              pattern: '^[a-zA-Z0-9]*@[a-zA-Z0-9]*\\.[a-zA-Z]*'
            }
          },
          additionalProperties: false
        },
        license: {
          type: 'object',
          properties: {
            name: {
              type: 'string'
            },
            url: {
              type: 'string'
            }
          },
          required: [
            'name'
          ],
          additionalProperties: false
        },
        version: {
          type: 'string'
        },
        coapVersion: {
          type: 'string'
        }
      },
      required: [
        'title',
        'version',
        'coapVersion'
      ],
      additionalProperties: false
    },
    paths: {
      type: 'array',
      items: {
        type: 'object',
        properties: {
          url: {
            type: 'string',
            pattern: '\/.*'
          },
          description: {
            type: 'string'
          },
          get: {
            type: 'object',
            properties: {
              produces: {
                $ref: '#/definitions/produces'
              },
              parameters: {
                $ref: '#/definitions/parameters'
              },
              description: {
                type: 'string'
              },
              etag: {
                type: 'boolean'
              },
              observable: {
                type: 'boolean'
              },
              responses: {
                $ref: '#/definitions/responses'
              }
            },
            additionalProperties: false
          },
          put: {
            type: 'object',
            properties: {
              consumes: {
                $ref: '#/definitions/consumes'
              },
              produces: {
                $ref: '#/definitions/produces'
              },
              parameters: {
                $ref: '#/definitions/parameters'
              },
              description: {
                type: 'string'
              },
              payload: {
                $ref: '#/definitions/payload'
              },
              responses: {
                $ref: '#/definitions/responses'
              }
            },
            additionalProperties: false
          },
          post: {
            type: 'object',
            properties: {
              consumes: {
                $ref: '#/definitions/consumes'
              },
              produces: {
                $ref: '#/definitions/produces'
              },
              parameters: {
                $ref: '#/definitions/parameters'
              },
              description: {
                type: 'string'
              },
              payload: {
                $ref: '#/definitions/payload'
              },
              responses: {
                $ref: '#/definitions/responses'
              }
            },
            additionalProperties: false
          },
          delete: {
            type: 'object',
            properties: {
              produces: {
                $ref: '#/definitions/produces'
              },
              parameters: {
                $ref: '#/definitions/parameters'
              },
              description: {
                type: 'string'
              },
              responses: {
                $ref: '#/definitions/responses'
              }
            },
            additionalProperties: false
          }
        },
        additionalProperties: false,
        required: [
          'url'
        ]
      },
      minItems: 1,
      uniqueItems: true
    }
  },
  required: [
    'coapi',
    'info',
    'paths'
  ],
  additionalProperties: false
};
