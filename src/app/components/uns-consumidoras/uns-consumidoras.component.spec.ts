import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UnsConsumidorasComponent } from './uns-consumidoras.component';

describe('UnsConsumidorasComponent', () => {
  let component: UnsConsumidorasComponent;
  let fixture: ComponentFixture<UnsConsumidorasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UnsConsumidorasComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UnsConsumidorasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
