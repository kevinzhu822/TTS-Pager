import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdminComponent } from './admin/admin.component';
import { TherapistViewComponent } from './therapistview/therapistview.component';


const routes: Routes = [
  {path: 'admin', component: AdminComponent},
  {path: 'therapists', component: TherapistViewComponent},
  {path: "", component: AdminComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
