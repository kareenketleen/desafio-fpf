import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BasicAttackComponent } from './basic-attack.component';

describe('BasicAttackComponent', () => {
  let component: BasicAttackComponent;
  let fixture: ComponentFixture<BasicAttackComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BasicAttackComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BasicAttackComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
