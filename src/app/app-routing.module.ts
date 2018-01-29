import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { AuthGuard } from './core/auth/auth.guard';
import { NgModule } from '@angular/core';
import { Routes, RouterModule, PreloadAllModules } from '@angular/router';

import { FormComponent } from './form/form.component';
import { AppComponent } from './app.component';
import { CarsComponent } from './cars/cars.component';
import { HomeComponent } from './home/home.component';
import { ShadowdomComponent } from './shadowdom/shadowdom.component';
import { SelectivePreloadingStrategy } from './core/selective-preload-strategy.service';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'directivas', loadChildren: 'app/directivas/directivas.module#DirectivasModule', data: { preload: true } },
  { path: 'form', component: FormComponent },
  { path: 'person', loadChildren: 'app/person/person.module#PersonModule', data: { preload: false } },
  { path: 'shadowdom', component: ShadowdomComponent },
  { path: 'pipes', loadChildren: 'app/pipes/pipes.module#PipesModule', data: { preload: false } },
  {
    path: 'admin',
    loadChildren: 'app/admin/admin.module#AdminModule',
    data: { preload: true },
    canActivate: [AuthGuard],
    canActivateChild: [AuthGuard],
    canLoad: [AuthGuard],
  },
  { path: 'registro', component: CarsComponent, outlet: 'popup' },
  { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  imports: [
    RouterModule.forRoot(
      routes,
      {
        //enableTracing: true,
        preloadingStrategy: SelectivePreloadingStrategy
      }
    )
    ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
