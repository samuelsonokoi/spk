import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RemidiationCardComponent } from './remidiation-card.component';

describe('RemidiationCardComponent', () => {
  let component: RemidiationCardComponent;
  let fixture: ComponentFixture<RemidiationCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RemidiationCardComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RemidiationCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
