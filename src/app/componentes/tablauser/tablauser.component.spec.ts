import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TablauserComponent } from './tablauser.component';

describe('TablauserComponent', () => {
  let component: TablauserComponent;
  let fixture: ComponentFixture<TablauserComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TablauserComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TablauserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
