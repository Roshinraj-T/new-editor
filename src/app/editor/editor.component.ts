import { ApplicationRef, Component, ComponentFactoryResolver, ComponentRef, ElementRef, EmbeddedViewRef, Injector, OnDestroy, OnInit, ViewEncapsulation, createComponent,Input,Output,EventEmitter, ViewChild } from '@angular/core';
import { AbstractControl, FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { Editor, FloatingMenuComponent, NgxEditorComponent,Toolbar } from 'ngx-editor';
import { MenuItem } from 'primeng/api';
import { Subscription } from 'rxjs';
import * as $ from 'jquery';

@Component({
  selector: 'app-editor',
  templateUrl: './editor.component.html',
  styleUrls: ['./editor.component.scss'],
  encapsulation: ViewEncapsulation.None,

})
export class EditorComponent implements OnInit, OnDestroy {
  constructor(private applicationRef: ApplicationRef,private componentFactoryResolver: ComponentFactoryResolver,
    private injector: Injector
) {}
  private updateSubscription: Subscription|null=null;
  private componentRef: ComponentRef<FloatingMenuComponent>|null=null;
  editor: Editor|null=null;
  form :any= new FormGroup({
    editorContent: new FormControl(),
  });
  @Input() formcontrolname = new FormControl();
  @Output() editorData=new EventEmitter;
  @ViewChild('ngxEditor') ngxEdit!:NgxEditorComponent;
  // get doc(): AbstractControl {
  //   return this.form.get('editorContent');
  // }
  editorValue:any|null;
  image:any|null;


  // private createFloatingMenu(): ComponentRef<FloatingMenuComponent> {
  //   //create a component reference
  //   const componentRef = createComponent(FloatingMenuComponent, {
  //     environmentInjector: this.applicationRef.injector,
  //   });
  //   const componentRef1 = createComponent(FloatingMenuComponent, {
  //     environmentInjector: this.applicationRef.injector,
  //   });
  //   if(this.editor ){
  //   componentRef.instance.editor = this.editor;
  //   }
  //   // add to application ref to run change detection
  //   this.applicationRef.attachView(componentRef.hostView);

  //   // // get DOM element from component
  //   const domElem = (componentRef.hostView as EmbeddedViewRef<any>)
  //     .rootNodes[0] as HTMLElement;

  //   document.body.appendChild(domElem);
  //   return componentRef;
  // }
  private createFloatingMenu(): ComponentRef<FloatingMenuComponent> {
    // Create a component reference for the FloatingMenuComponent
    const componentFactory = this.componentFactoryResolver.resolveComponentFactory(
      FloatingMenuComponent
    );
    const componentRef = componentFactory.create(this.injector);

    // Set the editor instance if needed
    if (this.editor) {
      componentRef.instance.editor = this.editor;
    }

    // Add the component to the application ref to run change detection
    this.applicationRef.attachView(componentRef.hostView);

    // Get the DOM element from the component
    const domElem = (componentRef.hostView as EmbeddedViewRef<any>)
      .rootNodes[0] as HTMLElement;

    document.body.appendChild(domElem);
    return componentRef;
  }
  ngOnInit(): void {
    this.editor = new Editor({
      history: true,
      keyboardShortcuts: true,
      inputRules: true,
    });
    this.componentRef = this.createFloatingMenu();
    this.speedDial=[
      {
          icon: 'pi pi-upload',
          command:()=>{
            this.openFileUpload()
          }
      },{
        icon:'pi pi-pencil',
        command:()=>{
          this.addLink()
        }
      },
      {
        icon: 'pi pi-external-link',
        command:()=>{
          this.addDot();
        }
    },

  ];
  }

  ngAfterViewInit() {
    console.log("eeee");
    if(this.editor)
    this.editor.commands.focus().scrollIntoView().exec();
  }

  emitdata(eve: any){
    console.log('QQQQQQQQQQQd', eve)
    if(this.image){
    const html = this.editorValue + this.image; 
    console.log("tect and image",html);
    this.editorData.emit(html);
    }
    else {
      console.log('SSSSSSSSSSs', this.editorValue)
      const html=this.editorValue;
      console.log("text",html);
      this.editorData.emit(html)
    }
    
  }
  ngOnDestroy(): void {
    if(this.updateSubscription){
    this.updateSubscription.unsubscribe();
    }
    if(this.componentRef)
    this.componentRef.destroy();
    if(this.editor){
    this.editor.destroy();

    }
    if(this.componentRef)
    this.applicationRef.detachView(this.componentRef.hostView);

   
  }
 //adding image 
 selectedFile: File | null = null;
 item:any;
 fileInput:any;
 imageUrl:any;
 onFileUpload(event: any) {
  console.log(event);
  if (!event || !event.target || !event.target.files || event.target.files.length === 0) {
    alert('Please select an image to upload.');
    return;
  }
   this.selectedFile = event.target.files[0] ;
   console.log("file");
   
   if (!this.selectedFile) {
    alert('Please select an image to upload.');
    return;
  }
  // Assuming you want to print the HTML tag with the selected image's URL
  this.printImageTag();
 }
 printImageTag() {
   if (!this.selectedFile) {
     console.error('No image selected.');
     return;
   }
   const reader = new FileReader();
   reader.onload = () => {
     this.imageUrl = reader.result as string;
     const imageTag = `<img src="${this.imageUrl}" alt="Uploaded Image" >`;
    //  if(imageTag!=null)
     this.image=imageTag
     console.log(imageTag);
   };
   reader.readAsDataURL(this.selectedFile);
 }
//speed dial
speedDial: any;
//image upload
@ViewChild('fileInputForimage') fileInputForimage: any;

openFileUpload(): void {
  console.log("clicked");
  
  // Programmatically trigger the click event on the hidden input element
  this.fileInputForimage.nativeElement.click();
}

onFileSelected(event: any): void {
  // Handle the file selection here
  this.selectedFile = event.target.files[0];
     // Check if a file is selected and if it is an image
     if (this.selectedFile && this.selectedFile.type.startsWith('image/')) {
      // File is an image, you can proceed with further operations
      console.log('Selected Image:', this.selectedFile);
      
      // Perform additional operations with the selected image if needed
    } else {
      // File is not an image or no file selected, handle the error here
      console.log('Error: Please select a valid image file.');
    }
  console.log('Selected File:', this.selectedFile);
  this.printImageTag();

  // You can perform further operations with the selected file if needed
}

//add Dot at end
threeDots:any;
addDot(){
  this.threeDots='. . .';
}
//add link
link:any;
visibleLink:boolean=false;
addLink(){
this.visibleLink=true
}
// hide speed dial
visibleSpeedDial:boolean=true;

}
