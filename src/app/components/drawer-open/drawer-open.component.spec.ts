import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DrawerOpenComponent } from './drawer-open.component';

describe('DrawerOpenComponent', () => {
  let component: DrawerOpenComponent;
  let fixture: ComponentFixture<DrawerOpenComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DrawerOpenComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DrawerOpenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
