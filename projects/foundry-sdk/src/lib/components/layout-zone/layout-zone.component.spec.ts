import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LayoutZoneComponent } from './layout-zone.component';

describe('LayoutZoneComponent', () => {
  let component: LayoutZoneComponent;
  let fixture: ComponentFixture<LayoutZoneComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LayoutZoneComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LayoutZoneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
