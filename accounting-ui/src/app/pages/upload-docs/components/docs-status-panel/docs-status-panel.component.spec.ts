import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DocsStatusPanelComponent } from './docs-status-panel.component';

describe('DocsStatusPanelComponent', () => {
  let component: DocsStatusPanelComponent;
  let fixture: ComponentFixture<DocsStatusPanelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DocsStatusPanelComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DocsStatusPanelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
