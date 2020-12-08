import { Injectable } from '@angular/core';
import {Coapi} from '../model/coapi';
import * as YAML from 'yaml';

@Injectable({
  providedIn: 'root'
})
export class YamlParserService {

  constructor() { }

  parseYamlSpec(yamlSpec: string): Coapi {
    return YAML.parse(yamlSpec);
  }
}
