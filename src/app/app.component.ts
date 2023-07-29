import {
  Component,
  ComponentRef,
  EmbeddedViewRef,
  OnDestroy,
  OnInit,
  ViewEncapsulation,
  ApplicationRef,
  createComponent,
  ViewChild,
  ElementRef,
  Renderer2,
} from '@angular/core';
import { AbstractControl, FormArray, FormBuilder, FormControl, FormGroup } from '@angular/forms';


// import jsonDoc from './doc';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent
 implements 
OnInit
// OnDestroy 
 {
  // constructor(private applicationRef: ApplicationRef,private elementRef: ElementRef,private formBuilder: FormBuilder) {}

  // // editordoc = jsonDoc;
  // private updateSubscription: Subscription|null=null;
  // private componentRef: ComponentRef<FloatingMenuComponent>|null=null;

  // editor: Editor|null=null;

  // form :any= new FormGroup({
  //   editorContent: new FormControl(),
  // });

  // get doc(): AbstractControl {
  //   return this.form.get('editorContent');
  // }



  // private createFloatingMenu(): ComponentRef<FloatingMenuComponent> {
  //   //create a component reference
  //   const componentRef = createComponent(FloatingMenuComponent, {
  //     environmentInjector: this.applicationRef.injector,
  //   });
  //   if(this.editor ){
  //   componentRef.instance.editor = this.editor;
  //   }
  //   // add to application ref to run change detection
  //   this.applicationRef.attachView(componentRef.hostView);

  //   // get DOM element from component
  //   const domElem = (componentRef.hostView as EmbeddedViewRef<any>)
  //     .rootNodes[0] as HTMLElement;

  //   document.body.appendChild(domElem);
  //   return componentRef;
  // }

  // ngOnInit(): void {
  //   // this.editor = new Editor();
  //   // this.componentRef = this.createFloatingMenu();

  // }

  // ngOnDestroy(): void {
  //   if(this.updateSubscription){
  //   this.updateSubscription.unsubscribe();
  //   }
  //   if(this.componentRef)
  //   this.componentRef.destroy();
  //   if(this.editor){
  //   this.editor.destroy();

  //   }
  //   if(this.componentRef)
  //   this.applicationRef.detachView(this.componentRef.hostView);
  // }
  editoForm:FormGroup = this.fb.group({
    // Other form controls can be added here as well
    items: this.fb.array([])
  });

  controlname:string="i";
  constructor(private fb:FormBuilder, private renderer: Renderer2){}
 
     // Get the form array control for easy access in the template
     get items(): FormArray {
      return this.editoForm.get('items') as FormArray;
    }
    addItem(): void {

  
      // const newFormGroup = this.fb.group({
      //   inputText: ["",[]] // Use the FormControl for ngx-editor content
      // });
  
      this.items.push(new FormControl());
      
    }
      // Method to remove an item from the form array
  removeItem(index: number): void {
    this.items.removeAt(index);
  }
  ngOnInit(): void {
    this.addItem();
  //   this.speedDial=[
  //     {
  //         icon: 'pi pi-pencil',
  //         command: () => {
  //         }
  //     },
  //     {
  //         icon: 'pi pi-refresh',
  //         command: () => {
  //         }
  //     },
  //     {
  //         icon: 'pi pi-trash',
  //         command: () => {
  //         }
  //     },
  //     {
  //         icon: 'pi pi-upload',
  //         routerLink: ['/fileupload']
  //     },
  //     {
  //         icon: 'pi pi-external-link',
  //         target:'_blank',
  //         url: 'http://angular.io'
  //     }
  // ];
  }

  editorData(event:any,i:any) {
    const doc = document.getElementById(i);
    console.log("event in parent",event);
    this.addItem();
    if(doc){
      doc.scrollIntoView()
    }
  }
  data(){
    console.log("editorForm Data",this.editoForm.value);
    
  }
  speedDial: any;
}
