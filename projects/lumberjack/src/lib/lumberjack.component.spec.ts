import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LumberjackComponent } from './lumberjack.component';

describe('LumberjackComponent', () => {
  let component: LumberjackComponent;
  let fixture: ComponentFixture<LumberjackComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LumberjackComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LumberjackComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
