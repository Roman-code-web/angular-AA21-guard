import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormRegistroUserComponent } from './form-registro-user.component';

describe('FormRegistroUserComponent', () => {
  let component: FormRegistroUserComponent;
  let fixture: ComponentFixture<FormRegistroUserComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormRegistroUserComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FormRegistroUserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
