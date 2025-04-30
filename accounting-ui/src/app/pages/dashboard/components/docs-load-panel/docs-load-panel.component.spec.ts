import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DocsLoadPanelComponent } from './docs-load-panel.component';

describe('DocsLoadPanelComponent', () => {
  let component: DocsLoadPanelComponent;
  let fixture: ComponentFixture<DocsLoadPanelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DocsLoadPanelComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DocsLoadPanelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
