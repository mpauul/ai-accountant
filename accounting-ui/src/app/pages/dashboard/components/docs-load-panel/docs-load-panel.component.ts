import { Component } from '@angular/core';
import { TabViewModule } from 'primeng/tabview';
import { ButtonModule } from 'primeng/button';
import { FileUploadModule } from 'primeng/fileupload';
import { MessageService } from 'primeng/api';
import { ToastModule } from 'primeng/toast';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-docs-load-panel',
  imports: [
    CommonModule,
    TabViewModule,
    ButtonModule,
    FileUploadModule,
    ToastModule
  ],
  providers: [MessageService],
  templateUrl: './docs-load-panel.component.html',
  styleUrl: './docs-load-panel.component.scss'
})
export class DocsLoadPanelComponent {
  uploadedFiles: any[] = [];

  constructor(private messageService: MessageService) {}

  onUpload(event: any) {
    console.log(event)
    for(let file of event.files) {
      this.uploadedFiles.push(file);
    }

    this.messageService.add({severity: 'info', summary: 'File Uploaded', detail: ''});
  }

  onError(event: any) {
    this.messageService.add({severity: 'error', summary: 'Error', detail: 'File upload failed'});
  }
}
