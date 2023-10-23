import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PokecardsComponent } from './pokecards.component';

describe('PokecardsComponent', () => {
  let component: PokecardsComponent;
  let fixture: ComponentFixture<PokecardsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PokecardsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PokecardsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
