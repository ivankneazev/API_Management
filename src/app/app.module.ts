import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormioModule } from 'angular-formio';
import { ConstructorComponent } from './constructor/constructor.component';
import { LoginComponent } from './login/login.component';
import { InputsModule } from '@progress/kendo-angular-inputs';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DateInputsModule } from '@progress/kendo-angular-dateinputs';
import { LabelModule } from '@progress/kendo-angular-label';
import { ButtonsModule } from '@progress/kendo-angular-buttons';
import { LayoutModule } from '@progress/kendo-angular-layout';
import { refDirective } from './directives/ref.directive';
import { AdministratorlayoutComponent } from './shared/components/administratorlayout/administratorlayout.component';


@NgModule({
  declarations: [
    AppComponent,
    ConstructorComponent,
    LoginComponent,
    refDirective,
    AdministratorlayoutComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormioModule,
    InputsModule,
    BrowserAnimationsModule,
    FormsModule,
    DateInputsModule,
    LabelModule,
    LayoutModule,
    ReactiveFormsModule,
    HttpClientModule,
    ButtonsModule
  ], 
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
