import { Error404Component } from './pages/error404/error404.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PagesModule } from './pages/pages.module';
import { HomeComponent } from './pages/home/home.component';
import { CanDeactivateGuard } from './guards/can-deactivate.guard';

const routes: Routes = [
  {path: '', component: HomeComponent, canDeactivate: [CanDeactivateGuard]},

  {path: '**', component: Error404Component}
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes),
    PagesModule,
  ],
  providers: [CanDeactivateGuard],
  exports: [RouterModule]
})
export class AppRoutingModule { }
