import { Component, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-multiple-div',
  templateUrl: './multiple-div.component.html',
  styleUrls: ['./multiple-div.component.scss']
})
export class MultipleDivComponent {
  @ViewChild('container', { static: true })
  containerRef!: ElementRef;
  showDiv:boolean=true;
  duplicateDiv() {
    // Get the container div where the duplicates will be added
    const container = this.containerRef.nativeElement;

    // Get the div element you want to duplicate
    const originalDiv = container.querySelector('.duplicate-me');

    // Create a new div element that is a duplicate of the original one
    const clonedDiv = originalDiv.cloneNode(true);

    // Add a click event listener to the cloned div to handle duplication
    clonedDiv.addEventListener('click', () => this.duplicateDiv());

    // Add the cloned div to the container
    container.appendChild(clonedDiv);
  }
  show(){
    this.showDiv=false;
  }
}
