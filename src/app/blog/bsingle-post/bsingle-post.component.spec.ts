import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BsinglePostComponent } from './bsingle-post.component';

describe('BsinglePostComponent', () => {
  let component: BsinglePostComponent;
  let fixture: ComponentFixture<BsinglePostComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BsinglePostComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BsinglePostComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
