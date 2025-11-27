import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NurseFind } from './nurse-find';

describe('NurseFind', () => {
  let component: NurseFind;
  let fixture: ComponentFixture<NurseFind>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NurseFind]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NurseFind);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
