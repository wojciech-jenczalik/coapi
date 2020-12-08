import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ApiGraphicalDocumentationComponent } from './api-graphical-documentation.component';

describe('ApiGraphicalDocumentationComponent', () => {
  let component: ApiGraphicalDocumentationComponent;
  let fixture: ComponentFixture<ApiGraphicalDocumentationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ApiGraphicalDocumentationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ApiGraphicalDocumentationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
