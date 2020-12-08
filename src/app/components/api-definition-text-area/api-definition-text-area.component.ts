import {Component, OnDestroy, OnInit} from '@angular/core';
import {YamlParserService} from '../../services/yaml-parser.service';
import {Store} from '@ngrx/store';
import {parseSpecification} from '../../state/specification.actions';
import SpecificationState from '../../state/specification.state';
import {v4 as uuidv4} from 'uuid';

@Component({
  selector: 'app-api-definition-text-area',
  templateUrl: './api-definition-text-area.component.html',
  styleUrls: ['./api-definition-text-area.component.css']
})
export class ApiDefinitionTextAreaComponent implements OnInit, OnDestroy {

  routeUuid: string;

  constructor(private readonly store: Store<SpecificationState>,
              private yamlParser: YamlParserService) {
  }

  ngOnInit() {
  }

  ngOnDestroy() {
  }

  submitSpec(yamlSpecification: string): void {
    const specification = this.yamlParser.parseYamlSpec(yamlSpecification);
    this.store.dispatch(parseSpecification({specification}));
  }

  generateUuid(): string {
    return uuidv4();
  }
}

