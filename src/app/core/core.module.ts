import { AuthService } from './auth/auth.service';
import { LogService } from './logs.service';
import { RouterModule } from '@angular/router';
import { NgModule, Optional, SkipSelf } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';

import { SelectivePreloadingStrategy } from './selective-preload-strategy.service';

import { BreadcrumbComponent } from './breadcrumb/breadcrumb.component';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { throwIfAlreadyLoaded } from './module-import-guard';
import { AuthGuard } from './auth/auth.guard';


@NgModule({
  imports: [
    CommonModule,
    TranslateModule,
    RouterModule
  ],
  declarations: [
    BreadcrumbComponent,
    HeaderComponent,
    FooterComponent
  ],
  providers: [
    SelectivePreloadingStrategy,
    LogService,
    AuthGuard,
    AuthService
  ],
  exports: [
    CommonModule,
    RouterModule,
    BreadcrumbComponent,
    HeaderComponent,
    FooterComponent
  ]
})
export class CoreModule {
  constructor( @Optional() @SkipSelf() parentModule: CoreModule) {
    throwIfAlreadyLoaded(parentModule, 'CoreModule');
  }
}
