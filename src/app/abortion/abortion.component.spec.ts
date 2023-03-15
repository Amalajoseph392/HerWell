import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AbortionComponent } from './abortion.component';

describe('AbortionComponent', () => {
  let component: AbortionComponent;
  let fixture: ComponentFixture<AbortionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AbortionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AbortionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
