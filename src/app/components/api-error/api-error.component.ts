import {Component, OnInit} from '@angular/core';
import {Observable, Subscription} from 'rxjs';
import {Store} from '@ngrx/store';
import SpecificationState, {getCoapiState, getError} from '../../state/specification.state';
import {Coapi} from '../../model/coapi';
import {CoapiError} from '../../model/coapi-error';

@Component({
  selector: 'app-api-error',
  templateUrl: './api-error.component.html',
  styleUrls: ['./api-error.component.css']
})
export class ApiErrorComponent implements OnInit {

  readonly error$: Observable<CoapiError>;

  constructor(private readonly store: Store<SpecificationState>) {
    this.error$ = store.select(getError);
  }

  ngOnInit(): void { }
}
