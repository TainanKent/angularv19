import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Chat3Component } from './chat3.component';

describe('Chat3Component', () => {
  let component: Chat3Component;
  let fixture: ComponentFixture<Chat3Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Chat3Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Chat3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
