import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { AboutComponent } from './pages/about/about.component';
import { NotFoundComponent } from './pages/not-found/not-found.component';
import { CommonComponent } from './pages/catalog/common/common.component';
import { CursedComponent } from './pages/catalog/cursed/cursed.component';
import { LegendaryComponent } from './pages/catalog/legendary/legendary.component';
import { MagicComponent } from './pages/catalog/magic/magic.component';
import { KatanaFormComponent } from './pages/katana-form/katana-form.component';
import { AuthComponent } from './pages/auth/auth.component';
import { authGuard } from './guards/auth.guard';

export const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'auth', component: AuthComponent },
  { path: 'home', component: HomeComponent },
  { path: 'about', component: AboutComponent },
  { path: 'catalog/common', component: CommonComponent },
  { path: 'catalog/magic', component: MagicComponent },
  { path: 'catalog/legendary', component: LegendaryComponent },
  { path: 'catalog/cursed', component: CursedComponent },
  {
    path: 'add-katana',
    component: KatanaFormComponent,
    canActivate: [authGuard],
  },
  { path: '**', component: NotFoundComponent },
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
