import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { environment } from '../../environments/environment';
import { Treatment } from '../models/treatment';

@Injectable({
  providedIn: 'root',
})
export class TreatmentsService {
  http: HttpClient;
  constructor(httpClientModule: HttpClient) {
    this.http = httpClientModule;
  }

  fetchAllTreatments(): Observable<Treatment[]> {
    return this.http
      .get<any>(environment.treatmentsServiceUrl + `/treatments`)
      .pipe(
        map((treatments) => {
          return treatments;
        })
      );
  }

  fetchAllTreatmentsByCode(queryString: string): Observable<Treatment[]> {
    return this.http
      .get<any>(
        environment.treatmentsServiceUrl +
          `/treatments?treatmentCode=${queryString}`
      )
      .pipe(map((treatments) => treatments || []));
  }
}
