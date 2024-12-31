import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProdutFormComponent } from './produt-form.component';

describe('ProdutFormComponent', () => {
  let component: ProdutFormComponent;
  let fixture: ComponentFixture<ProdutFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProdutFormComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProdutFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
