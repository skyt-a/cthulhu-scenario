import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TopComponent } from './pages/top/top.component';
import { ScenarioComponent } from './pages/scenario/scenario.component';
import { ContentComponent } from './pages/content/content.component';
import { AgreementComponent } from './pages/agreement/agreement.component';

const routes: Routes = [
  {path: 'agreement', component: AgreementComponent},
  {path: 'content', component: ContentComponent},
  {path: 'scenario', component: ScenarioComponent},
  {path: 'top', component: TopComponent},
  {path: '**', component: TopComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
