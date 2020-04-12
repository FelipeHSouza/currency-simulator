import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeCompponent } from './home.component';

describe('CambioComponent', () => {
  let component: HomeCompponent;
  let fixture: ComponentFixture<HomeCompponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HomeCompponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeCompponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
