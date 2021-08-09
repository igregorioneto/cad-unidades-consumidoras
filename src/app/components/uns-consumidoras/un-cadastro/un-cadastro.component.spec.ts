import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UnCadastroComponent } from './un-cadastro.component';

describe('UnCadastroComponent', () => {
  let component: UnCadastroComponent;
  let fixture: ComponentFixture<UnCadastroComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UnCadastroComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UnCadastroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
