import { Component, ViewChild } from '@angular/core';
import * as $ from 'jquery';

@Component({
  selector: 'app-component',
  templateUrl: './component.component.html',
  styleUrls: ['./component.component.scss']
})
export class ComponentComponent {
  @ViewChild('fileInput') fileInput: any;

  openFileUpload(): void {
    // Programmatically trigger the click event on the hidden input element
    this.fileInput.nativeElement.click();
  }

  onFileSelected(event: any): void {
    // Handle the file selection here
    const selectedFile = event.target.files[0];
    console.log('Selected File:', selectedFile);

    // You can perform further operations with the selected file if needed
  }
}
