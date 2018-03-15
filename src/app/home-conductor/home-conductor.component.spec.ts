import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeConductorComponent } from './home-conductor.component';

describe('HomeConductorComponent', () => {
  let component: HomeConductorComponent;
  let fixture: ComponentFixture<HomeConductorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HomeConductorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeConductorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
