import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MultipleDivComponent } from './multiple-div/multiple-div.component';
import { EditorComponent } from './editor/editor.component';

const routes: Routes = [
  {path:'multiple',component:MultipleDivComponent},
  {path:'editor',component:EditorComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
