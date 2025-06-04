import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { EventEmitter, Output } from '@angular/core';
import { BadgeModule } from 'primeng/badge';
import { TableModule } from 'primeng/table';
import { ProductService, Product } from '../../../../core/services/products.service';

@Component({
  selector: 'app-docs-load-panel',
  imports: [
    CommonModule,
    TableModule,
    BadgeModule
  ],
  providers: [ProductService],
  templateUrl: './docs-load-panel.component.html',
  styleUrl: './docs-load-panel.component.scss'
})
export class DocsLoadPanelComponent {
  @Output() filesSelected = new EventEmitter<File[]>();
  selectedFiles: File[] = [];

  products!: Product[];

  constructor(private productService: ProductService) {}

  ngOnInit() {
      this.productService.getProductsMini().then((data) => {
          this.products = data;
          console.warn(this.products)
      });
  }

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
