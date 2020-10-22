import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdministratorlayoutComponent } from './administratorlayout.component';

describe('AdministratorlayoutComponent', () => {
  let component: AdministratorlayoutComponent;
  let fixture: ComponentFixture<AdministratorlayoutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdministratorlayoutComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdministratorlayoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
