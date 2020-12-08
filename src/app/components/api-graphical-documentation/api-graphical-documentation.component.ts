import {Component, OnInit} from '@angular/core';
import {Observable, Subscription} from 'rxjs';
import {Store} from '@ngrx/store';
import SpecificationState, {getCoapiState} from '../../state/specification.state';
import {Coapi} from '../../model/coapi';

@Component({
  selector: 'app-api-graphical-documentation',
  templateUrl: './api-graphical-documentation.component.html',
  styleUrls: ['./api-graphical-documentation.component.css']
})
export class ApiGraphicalDocumentationComponent implements OnInit {

  readonly coapi$: Observable<Coapi>;

  constructor(private readonly store: Store<SpecificationState>) {
    this.coapi$ = store.select(getCoapiState);
  }

  ngOnInit(): void { }
}
