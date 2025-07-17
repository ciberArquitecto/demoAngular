import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComponenteUnosComponent } from './componente-unos.component';

describe('ComponenteUnosComponent', () => {
  let component: ComponenteUnosComponent;
  let fixture: ComponentFixture<ComponenteUnosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ComponenteUnosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ComponenteUnosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
