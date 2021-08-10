import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FatCadastroComponent } from './fat-cadastro.component';

describe('FatCadastroComponent', () => {
  let component: FatCadastroComponent;
  let fixture: ComponentFixture<FatCadastroComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FatCadastroComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FatCadastroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
