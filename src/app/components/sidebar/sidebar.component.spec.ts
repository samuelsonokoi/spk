import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { SidebarComponent } from './sidebar.component';
import { DebugElement } from '@angular/core';

describe('SidebarComponent', () => {
  let component: SidebarComponent;
  let fixture: ComponentFixture<SidebarComponent>;
  let button: DebugElement;
  let aside: DebugElement;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SidebarComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(SidebarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();

    button = fixture.debugElement.query(By.css('.collapseButton'));
    aside = fixture.debugElement.query(By.css('aside'));
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should toggle sidebar visibility when button is clicked', () => {
    // Initial state
    expect(component.sidebarCollapsed).toBe(false);
    expect(aside.nativeElement.classList.contains('collapsed')).toBe(false);
    expect(aside.nativeElement.style.width).toBe('16rem');

    // First click - should collapse
    button.nativeElement.click();
    fixture.detectChanges();

    expect(component.sidebarCollapsed).toBe(true);
    expect(aside.nativeElement.classList.contains('collapsed')).toBe(true);
    expect(aside.nativeElement.style.width).toBe('5rem');

    // Second click - should expand
    button.nativeElement.click();
    fixture.detectChanges();

    expect(component.sidebarCollapsed).toBe(false);
    expect(aside.nativeElement.classList.contains('collapsed')).toBe(false);
    expect(aside.nativeElement.style.width).toBe('16rem');
  });
});
