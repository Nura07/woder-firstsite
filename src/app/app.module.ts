import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { ServiceComponent } from './service/service.component';
import { GalleryComponent } from './gallery/gallery.component';
import { RegisterComponent } from './register/register.component';
import { HomeComponent } from './home/home.component';
import { ErrorPageComponent } from './error-page/error-page.component';
import { DevComponent } from './dev/dev.component';
import { TestingComponent } from './testing/testing.component';
import { DesignComponent } from './design/design.component';
import { FormsModule } from '@angular/forms';
import { LocalserviceComponent } from './service/localservice/localservice.component';
import { TechinalserviceComponent } from './service/techinalservice/techinalservice.component';
import { S1Component } from './s1/s1.component';
import { S2Component } from './s2/s2.component';
import { AshaComponent } from './asha/asha.component';
import { PunithComponent } from './punith/punith.component';
import { PipedemoComponent } from './pipedemo/pipedemo.component';
import { SquarePipe } from './square.pipe';
import { LifecyclehooksComponent } from './lifecyclehooks/lifecyclehooks.component';
import { TdfComponent } from './tdf/tdf.component';
import { RdfComponent } from './rdf/rdf.component';
import { ReactiveFormsModule } from '@angular/forms';
import { LoginformComponent } from './loginform/loginform.component';



@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    ServiceComponent,
    GalleryComponent,
    RegisterComponent,
    HomeComponent,
    ErrorPageComponent,
    DevComponent,
    TestingComponent,
    DesignComponent,
    LocalserviceComponent,
    TechinalserviceComponent,
    S1Component,
    S2Component,
    AshaComponent,
    PunithComponent,
    PipedemoComponent,
    SquarePipe,
    LifecyclehooksComponent,
    TdfComponent,
    RdfComponent,
    LoginformComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule, FormsModule,ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
