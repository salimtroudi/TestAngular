import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListResSalimTroudiComponent } from './list-resSalimTroudi.component';

describe('ListResSalimTroudiComponent', () => {
  let component: ListResSalimTroudiComponent;
  let fixture: ComponentFixture<ListResSalimTroudiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ListResSalimTroudiComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListResSalimTroudiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
