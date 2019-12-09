import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditerMissionComponent } from './editer-mission.component';

describe('EditerMissionComponent', () => {
  let component: EditerMissionComponent;
  let fixture: ComponentFixture<EditerMissionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditerMissionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditerMissionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
