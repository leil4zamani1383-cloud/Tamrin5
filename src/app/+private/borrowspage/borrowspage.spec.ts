import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Borrowspage } from './borrowspage';

describe('Borrowspage', () => {
  let component: Borrowspage;
  let fixture: ComponentFixture<Borrowspage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Borrowspage]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Borrowspage);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
