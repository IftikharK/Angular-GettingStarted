import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { WelcomeComponent } from './home/welcome/welcome.component';


@NgModule({
  imports: [ RouterModule.forRoot([
    { path: 'welcome', component: WelcomeComponent },
    { path: '', redirectTo: 'welcome', pathMatch: 'full' }, // defalt routes -> welcome component
    { path: '**', redirectTo: 'welcome', pathMatch: 'full' }, // wild card path incase the requested url doesn't match any path
  ])
],
  exports: [RouterModule]
})
export class AppRoutingModule { }
