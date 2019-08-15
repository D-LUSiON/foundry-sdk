import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WorkspaceWrapperComponent } from './workspace-wrapper.component';

describe('workspaceWrapperComponent', () => {
  let component: WorkspaceWrapperComponent;
  let fixture: ComponentFixture<WorkspaceWrapperComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WorkspaceWrapperComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WorkspaceWrapperComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
