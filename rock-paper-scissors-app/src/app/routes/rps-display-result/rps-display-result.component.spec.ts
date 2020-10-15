import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RpsDisplayResultComponent } from './rps-display-result.component';

describe('RpsDisplayResultComponent', () => {
  let component: RpsDisplayResultComponent;
  let fixture: ComponentFixture<RpsDisplayResultComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RpsDisplayResultComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RpsDisplayResultComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
