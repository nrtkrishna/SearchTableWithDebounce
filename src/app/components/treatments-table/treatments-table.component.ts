import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Observable, Subject, Subscription } from 'rxjs';

import { Treatment } from '../../models/treatment';
import { TreatmentsService } from '../../services/treatments.service';

@Component({
  selector: 'app-treatments-table',
  templateUrl: './treatments-table.component.html',
  styleUrls: ['./treatments-table.component.scss'],
})
export class TreatmentsTableComponent implements OnInit {
  treatmentsService: TreatmentsService;
  displayedColumns: string[] = ['treatmentCode', 'patient', 'treatmentDate'];

  @Input() dataSource: any;
  @Input() validationError: string = '';
  @Output() public applyFilterEmitter = new EventEmitter<any>();

  constructor(treatmentsService: TreatmentsService) {
    this.treatmentsService = treatmentsService;
  }

  applyFilter($event: any) {
    const filterValue = ($event.target as HTMLInputElement).value;
    this.applyFilterEmitter.emit(filterValue);
  }

  ngOnInit(): void {}
}
