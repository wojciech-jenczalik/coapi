import {Component, OnDestroy, OnInit} from '@angular/core';
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

  constructor(private readonly store: Store<SpecificationState>) {
  }

  ngOnInit() {
  }

  ngOnDestroy() {
  }

  submitSpec(yamlSpecification: any): void {
    this.store.dispatch(parseSpecification({specification: yamlSpecification}));
  }

  generateUuid(): string {
    return uuidv4();
  }
}

