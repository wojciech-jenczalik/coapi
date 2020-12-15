import { Injectable } from '@angular/core';
import {Coapi} from '../model/coapi';
import * as YAML from 'yaml';
import {CoapiValidationService} from './coapi-validation.service';

@Injectable({
  providedIn: 'root'
})
export class YamlParserService {

  constructor(private readonly validator: CoapiValidationService) { }

  parseYamlSpec(yamlSpec: string): Coapi {
    const coapi = YAML.parse(yamlSpec);
    this.validator.validate(coapi);
    return coapi;
  }
}
