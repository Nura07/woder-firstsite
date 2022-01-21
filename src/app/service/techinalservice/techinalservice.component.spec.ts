import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TechinalserviceComponent } from './techinalservice.component';

describe('TechinalserviceComponent', () => {
  let component: TechinalserviceComponent;
  let fixture: ComponentFixture<TechinalserviceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TechinalserviceComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TechinalserviceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
