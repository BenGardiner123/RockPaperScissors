import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SelectionPickerComponent } from './selection-picker.component';

describe('SelectionPickerComponent', () => {
  let component: SelectionPickerComponent;
  let fixture: ComponentFixture<SelectionPickerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SelectionPickerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SelectionPickerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
