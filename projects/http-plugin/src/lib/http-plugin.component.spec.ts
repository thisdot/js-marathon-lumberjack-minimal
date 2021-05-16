import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HttpPluginComponent } from './http-plugin.component';

describe('HttpPluginComponent', () => {
  let component: HttpPluginComponent;
  let fixture: ComponentFixture<HttpPluginComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HttpPluginComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HttpPluginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
