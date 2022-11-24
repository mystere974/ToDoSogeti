import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SingleToDoComponent } from './single-to-do.component';

describe('SingleToDoComponent', () => {
  let component: SingleToDoComponent;
  let fixture: ComponentFixture<SingleToDoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SingleToDoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SingleToDoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
