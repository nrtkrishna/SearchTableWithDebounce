import { HttpClient, HttpHandler } from '@angular/common/http';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { TreatmentsService } from 'src/app/services/treatments.service';

import { TreatmentsTableContainerComponent } from './treatments-table-container.component';

describe('TreatmentsTableContainerComponent', () => {
  let component: TreatmentsTableContainerComponent;
  let fixture: ComponentFixture<TreatmentsTableContainerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TreatmentsTableContainerComponent],
      providers: [HttpClient, HttpHandler],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TreatmentsTableContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
