import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { SiteComponent } from './site.component';
import { SharedModule } from '../shared.module';

const routes: Routes = [
  {
    path: '',
    component: SiteComponent
  }
];

@NgModule({
  declarations: [SiteComponent],
  imports: [CommonModule, RouterModule.forRoot(routes), SharedModule],
  exports: [RouterModule]
})
export class SiteModule {}
