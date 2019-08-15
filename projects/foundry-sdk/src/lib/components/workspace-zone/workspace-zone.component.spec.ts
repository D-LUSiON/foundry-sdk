import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WorkspaceZoneComponent } from './workspace-zone.component';

describe('workspaceZoneComponent', () => {
  let component: WorkspaceZoneComponent;
  let fixture: ComponentFixture<WorkspaceZoneComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WorkspaceZoneComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WorkspaceZoneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
