import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClientManagerComponent } from './client-manager.component';

describe('ClientManagerComponent', () => {
  let component: ClientManagerComponent;
  let fixture: ComponentFixture<ClientManagerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ClientManagerComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ClientManagerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
