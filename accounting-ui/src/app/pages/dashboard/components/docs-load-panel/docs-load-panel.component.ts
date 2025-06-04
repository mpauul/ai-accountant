import { Component } from '@angular/core';
import { TabViewModule } from 'primeng/tabview';
import { ButtonModule } from 'primeng/button';
import { FileUploadModule } from 'primeng/fileupload';
import { MessageService } from 'primeng/api';
import { ToastModule } from 'primeng/toast';
import { CommonModule } from '@angular/common';
import { StepperModule } from 'primeng/stepper';
import { InputSwitchModule } from 'primeng/inputswitch';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { ApiService } from '../../../../core/services/api.service';
import { catchError, forkJoin, of, retry } from 'rxjs';


interface UploadEvent {
  originalEvent: Event;
  files: File[];
}
@Component({
  selector: 'app-docs-load-panel',
  imports: [
    CommonModule,
    TabViewModule,
    ButtonModule,
    FileUploadModule,
    ToastModule,
    StepperModule,
  ],
  providers: [MessageService],
  templateUrl: './docs-load-panel.component.html',
  styleUrl: './docs-load-panel.component.scss'
})
export class DocsLoadPanelComponent {
  uploadedFiles: any[] = [];
  uploadedBankStatements: any[]=[];
  uploadedInvoices: any[]=[];
  uploadedExpenses: any[]=[];
  isCloseMonthBtnEnabled = false;
  checked=true
  constructor(
    private messageService: MessageService,
    private _apiService: ApiService,
  ) {}

  onCloseMonth(){

  }

  onBankStatementsUpload(event: any) {
    for(let file of event.files) {
        this.uploadedBankStatements.push(file);
    }
    console.log("Bank statements:", this.uploadedBankStatements)
    this.messageService.add({severity: 'info', summary: 'Uploaded bank statements', detail: ''});
  }

  onInvoicesUpload(event: any) {
    for(let file of event.files) {
        this.uploadedInvoices.push(file);
    }
    console.log("Invoices:", this.uploadedInvoices)
    this.messageService.add({severity: 'info', summary: 'Uploaded Invoices', detail: ''});
  }

  onUploadExpenses(event: any) {
    for(let file of event.files) {
        this.uploadedExpenses.push(file);
    }
    console.log("Expenses:", this.uploadedExpenses)
    // this.
    this.messageService.add({severity: 'info', summary: 'Uploaded Expenses', detail: ''});
  }

  uploadPDFs(event: any) {
    console.log(event)
    const files: File[] = event.files;

    const uploadRequests = files.map(file =>
      this._apiService.uploadFile(file).pipe(
        retry(2), // retry twice before failing
        catchError(error => {
          console.error(`Error uploading file ${file.name}`, error);
          return of({ error: true, itemId: file.name }); // continue with a placeholder
        })
      )
    );

    forkJoin(uploadRequests).subscribe({
      next: results => {
        console.log('All updates done:', results);
      },
      error: err => {
        console.error('Unexpected error (should be rare with catchError):', err);
        // this.loading = false;
      }
    });

  }
}
