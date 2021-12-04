import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TelaCadastoComponent } from './tela-cadasto.component';

describe('TelaCadastoComponent', () => {
  let component: TelaCadastoComponent;
  let fixture: ComponentFixture<TelaCadastoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TelaCadastoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TelaCadastoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
