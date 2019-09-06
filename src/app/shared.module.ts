import { NgModule } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';
import { CommonModule } from '@angular/common';
import { MatToolbarModule } from '@angular/material/toolbar';

const MATERIAL_MODULES: any[] = [MatToolbarModule];

@NgModule({
  imports: [MATERIAL_MODULES],
  exports: [CommonModule, TranslateModule, MATERIAL_MODULES]
})
export class SharedModule {}
