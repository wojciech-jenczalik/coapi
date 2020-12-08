import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ApiDefinitionTextAreaComponent } from './api-definition-text-area.component';

describe('ApiDefinitionTextAreaComponent', () => {
  let component: ApiDefinitionTextAreaComponent;
  let fixture: ComponentFixture<ApiDefinitionTextAreaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ApiDefinitionTextAreaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ApiDefinitionTextAreaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
