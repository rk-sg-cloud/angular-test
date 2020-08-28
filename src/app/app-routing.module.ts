import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RkCheckComponent } from './rk-check/rk-check.component';
import { ViewComponentComponent } from './view/view-component/view-component.component';
import { ErrorPageComponent } from './error-page/error-page.component';
import { ViewChildOneComponent } from './view-child-one/view-child-one.component';
import { ViewChildTwoComponent } from './view-child-two/view-child-two.component';

const routes: Routes = [
  {path: '', redirectTo: '/show', pathMatch: 'full'},
  {path: 'show', component: RkCheckComponent},
  {
    path: 'viewPosts', component: ViewComponentComponent,
    children: [
      {path: '', redirectTo: 'one', pathMatch: 'full'},
      {path: 'one', component: ViewChildOneComponent},
      {path: 'two', component: ViewChildTwoComponent},
      {path: '**', redirectTo: 'two', pathMatch: 'full'}
    ]
  },
  {path: '**', component: ErrorPageComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
