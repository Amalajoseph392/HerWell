import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TeenageComponent } from './teenage.component';

describe('TeenageComponent', () => {
  let component: TeenageComponent;
  let fixture: ComponentFixture<TeenageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TeenageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TeenageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
