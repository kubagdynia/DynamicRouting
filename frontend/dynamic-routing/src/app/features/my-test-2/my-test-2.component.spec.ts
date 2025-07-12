import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MyTest2Component } from './my-test-2.component';

describe('MyTest2Component', () => {
  let component: MyTest2Component;
  let fixture: ComponentFixture<MyTest2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MyTest2Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MyTest2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
