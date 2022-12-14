import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatTableModule } from '@angular/material/table';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TreatmentsTableComponent } from './components/treatments-table/treatments-table.component';
import { PagenotfoundComponent } from './components/pagenotfound/pagenotfound.component';
import { TreatmentsService } from './services/treatments.service';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import { TreatmentsTableContainerComponent } from './containers/treatments-table-container/treatments-table-container.component';

@NgModule({
  declarations: [AppComponent, TreatmentsTableComponent, PagenotfoundComponent, TreatmentsTableContainerComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatTableModule,
    MatFormFieldModule,
    MatInputModule,
    MatInputModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
  ],
  providers: [TreatmentsService],
  bootstrap: [AppComponent],
})
export class AppModule {}
