import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MyTest1Component } from './my-test-1.component';

describe('MyTest1Component', () => {
  let component: MyTest1Component;
  let fixture: ComponentFixture<MyTest1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MyTest1Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MyTest1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
