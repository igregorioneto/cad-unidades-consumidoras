import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UnInformacaoComponent } from './un-informacao.component';

describe('UnInformacaoComponent', () => {
  let component: UnInformacaoComponent;
  let fixture: ComponentFixture<UnInformacaoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UnInformacaoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UnInformacaoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
