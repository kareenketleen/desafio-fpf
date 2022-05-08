import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlayerCommandsComponent } from './player-commands.component';

describe('PlayerCommandsComponent', () => {
  let component: PlayerCommandsComponent;
  let fixture: ComponentFixture<PlayerCommandsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PlayerCommandsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PlayerCommandsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
