import { Component, OnInit } from '@angular/core';
import { Observable, Subject, Subscription } from 'rxjs';
import { debounceTime, distinctUntilChanged, mergeMap } from 'rxjs/operators';

import { isValidSearchString } from 'src/app/utils/validator';
import { Treatment } from 'src/app/models/treatment';
import { TreatmentsService } from 'src/app/services/treatments.service';

@Component({
  selector: 'app-treatments-table-container',
  templateUrl: './treatments-table-container.component.html',
  styleUrls: ['./treatments-table-container.component.scss'],
})
export class TreatmentsTableContainerComponent implements OnInit {
  treatmentsService: TreatmentsService;
  dataSource$: Observable<Treatment[]> | undefined;
  subscription: Subscription | undefined;
  searchTextChanged = new Subject<string>();
  validationError: string = '';
  constructor(treatmentsService: TreatmentsService) {
    this.treatmentsService = treatmentsService;
  }

  ngOnInit(): void {
    this.dataSource$ = this.treatmentsService.fetchAllTreatments();

    this.subscription = this.searchTextChanged
      .pipe(
        debounceTime(1000),
        distinctUntilChanged(),
        mergeMap(async (searchStr) => {
          if (isValidSearchString(searchStr)) {
            this.searchTreatment(searchStr);
            this.validationError = '';
          } else {
            this.validationError = 'Please enter a valid input';
          }
        })
      )
      .subscribe((res) => {
        console.log(res);
      });
  }

  searchTreatment(text: string): void {
    this.dataSource$ = this.treatmentsService.fetchAllTreatmentsByCode(text);
  }

  applySearchFilter(searchString: string) {
    this.searchTextChanged.next(searchString);
  }
}
