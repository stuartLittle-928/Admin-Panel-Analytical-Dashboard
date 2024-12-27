import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UIComponentsComponent } from './ui-components.component';

describe('UIComponentsComponent', () => {
  let component: UIComponentsComponent;
  let fixture: ComponentFixture<UIComponentsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UIComponentsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(UIComponentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
