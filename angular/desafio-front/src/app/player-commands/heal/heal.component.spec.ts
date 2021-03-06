import { ComponentFixture, TestBed } from '@angular/core/testing';
import { GameModule } from 'src/app/game/game.module';

import { HealComponent } from './heal.component';

describe('HealComponent', () => {
  let component: HealComponent;
  let fixture: ComponentFixture<HealComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [HealComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HealComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
