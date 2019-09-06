import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { SiteComponent } from './site.component';
import { SharedModule } from '../shared.module';
import { HomeComponent } from './home/home.component';
import { AcademicComponent } from './academic/academic.component';
import { EnterpriseComponent } from './enterprise/enterprise.component';
import { HealthcareComponent } from './healthcare/healthcare.component';
import { ResearchComponent } from './research/research.component';

const routes: Routes = [
  {
    path: '',
    component: SiteComponent,
    children: [
      {
        path: '',
        component: HomeComponent
      },
      {
        path: 'academic',
        component: AcademicComponent
      },
      {
        path: 'enterprise',
        component: EnterpriseComponent
      },
      {
        path: 'healthcare',
        component: HealthcareComponent
      },
      {
        path: 'research',
        component: ResearchComponent
      }
    ]
  }
];

@NgModule({
  declarations: [
    SiteComponent,
    HomeComponent,
    AcademicComponent,
    EnterpriseComponent,
    HealthcareComponent,
    ResearchComponent
  ],
  imports: [CommonModule, RouterModule.forChild(routes), SharedModule],
  exports: [RouterModule]
})
export class SiteModule {}
