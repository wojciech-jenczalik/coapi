import {Injectable} from '@angular/core';
import {Coapi} from '../model/coapi';
import * as YAML from 'yaml';
import {CoapiError} from '../model/coapi-error';

@Injectable({
  providedIn: 'root'
})
export class YamlParserService {

  constructor() { }

  parseYamlSpec(yamlSpec: string): Coapi {
    try{
      return YAML.parse(yamlSpec);
    } catch (e) {
      throw new CoapiError('Error while parsing YAML', e, []);
    }
  }
}
