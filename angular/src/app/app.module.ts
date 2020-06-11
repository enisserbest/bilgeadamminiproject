import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainPageComponent } from './pages/MainPage/main-page.component';
import { MenuComponent } from './pages/menu/menu/menu.component';
import { UsersComponent } from './pages/users/users.component';
import { GridModule } from '@progress/kendo-angular-grid';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AddProductComponent } from './pages/MainPage/addProduct/add-product/add-product.component';
import { DialogsModule } from '@progress/kendo-angular-dialog';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DateInputsModule } from '@progress/kendo-angular-dateinputs';
import { InputsModule } from '@progress/kendo-angular-inputs';
import { LoginComponent } from './pages/login/login.component';
import { NewUserComponent } from './pages/login/new-user/new-user.component';
import { DropDownsModule } from '@progress/kendo-angular-dropdowns';
import { UserFilterPipe } from './pages/users/FilterPipe/user-filter.pipe';
import { MultiAlertsComponent } from './pages/multi-alerts/multi-alerts.component';
import { AlertComponent } from './pages/alert/alert.component';

@NgModule({
  declarations: [
    AppComponent,
    MainPageComponent,
    MenuComponent,
    UsersComponent,
    AddProductComponent,
    LoginComponent,
    NewUserComponent,
    UserFilterPipe,
    AlertComponent,
    MultiAlertsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpModule,
    GridModule,
    BrowserAnimationsModule,
    DialogsModule,
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    DateInputsModule,
    InputsModule,
    DropDownsModule
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule { }
