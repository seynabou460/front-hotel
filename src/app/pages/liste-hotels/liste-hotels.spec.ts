import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListeHotels } from './liste-hotels';

describe('ListeHotels', () => {
  let component: ListeHotels;
  let fixture: ComponentFixture<ListeHotels>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ListeHotels]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListeHotels);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
