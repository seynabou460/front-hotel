import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ListeHotelsComponent } from './liste-hotels'; // ✅ bon nom de composant

describe('ListeHotelsComponent', () => {
  let component: ListeHotelsComponent;
  let fixture: ComponentFixture<ListeHotelsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ListeHotelsComponent] // ✅ c’est un composant standalone
    }).compileComponents();

    fixture = TestBed.createComponent(ListeHotelsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('devrait être créé correctement', () => {
    expect(component).toBeTruthy();
  });
});