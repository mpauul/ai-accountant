import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Output } from '@angular/core';
import { DocsLoadPanelComponent } from './components/docs-load-panel/docs-load-panel.component';

@Component({
  selector: 'app-upload-docs',
  imports: [
    CommonModule,
    DocsLoadPanelComponent
  ],
  templateUrl: './upload-docs.component.html',
  styleUrl: './upload-docs.component.scss'
})
export class UploadDocsComponent {
  @Output() filesSelected = new EventEmitter<File[]>();
  selectedFiles: File[] = [];

  onFileDropped(event: DragEvent) {
    event.preventDefault(); // Prevent default browser handling
  
    const files = event.dataTransfer?.files;
    if (files && files.length > 0) {
      this.processFiles(files);
    }
    console.log(this.processFiles)
  }
  
  onDragOver(event: DragEvent) {
    event.preventDefault(); // Needed to allow dropping
  }

  onFileSelected(event: Event) {
    const input = event.target as HTMLInputElement;
    if (input.files) {
      this.processFiles(input.files);
    }
  }

  private processFiles(fileList: FileList) {
    this.selectedFiles = Array.from(fileList);
    this.filesSelected.emit(this.selectedFiles);
  }

  // Optional: for clearing the file list
  clearFiles() {
    this.selectedFiles = [];
  }
}
