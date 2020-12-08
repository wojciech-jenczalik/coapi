import {Component, OnDestroy, OnInit} from '@angular/core';
import {YamlParserService} from '../../services/yaml-parser.service';
import {select, Store} from '@ngrx/store';
import {Observable, Subscription} from 'rxjs';
import {Coapi} from '../../model/coapi';
import {parseSpecification} from '../../state/specification.actions';
import SpecificationState from '../../state/specification.state';
import {map} from 'rxjs/operators';

@Component({
  selector: 'app-api-definition-text-area',
  templateUrl: './api-definition-text-area.component.html',
  styleUrls: ['./api-definition-text-area.component.css']
})
export class ApiDefinitionTextAreaComponent implements OnInit, OnDestroy {

  constructor(private readonly store: Store<SpecificationState>,
              private yamlParser: YamlParserService) {
  }

  ngOnInit() { }

  ngOnDestroy() { }

  submitSpec(yamlSpecification: string): void {
    const specification = this.yamlParser.parseYamlSpec(yamlSpecification);
    this.store.dispatch(parseSpecification({specification}));
  }
}

