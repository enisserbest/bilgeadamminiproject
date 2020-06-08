import { NgModule, ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UsersComponent } from './pages/users/users.component';
import { MenuComponent } from './pages/menu/menu/menu.component';
import { MainPageComponent } from './pages/MainPage/main-page.component';


const appRoutes: Routes = [
  { path: 'ürünler', component: MainPageComponent },
  { path: 'kullanıcılar', component: UsersComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule {

}
export const PageRouterProvider: ModuleWithProviders = RouterModule.forRoot(appRoutes);
