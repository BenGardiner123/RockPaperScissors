import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RpsSelectionComponent } from './rps-selection.component';

describe('RpsSelectionComponent', () => {
  let component: RpsSelectionComponent;
  let fixture: ComponentFixture<RpsSelectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RpsSelectionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RpsSelectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
