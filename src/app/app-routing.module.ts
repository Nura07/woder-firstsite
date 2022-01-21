import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DesignComponent } from './design/design.component';
import { DevComponent } from './dev/dev.component';
import { GalleryComponent } from './gallery/gallery.component';
import { HomeComponent } from './home/home.component';
import { LifecyclehooksComponent } from './lifecyclehooks/lifecyclehooks.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { ServiceComponent } from './service/service.component';
import { TestingComponent } from './testing/testing.component';

const routes: Routes = [
  {
    path:'home',
    component:HomeComponent
  },
  {
    path:'gallery',
    component:GalleryComponent
  },
  {
    path:'register',
    component:RegisterComponent
  },
  {
    path:'lifecylehooks',
    component:LifecyclehooksComponent
  },
  {
    path:'service',
    component:ServiceComponent
    
  },
  {
    path:'login',
    component:LoginComponent
  },
  {
    path:'service',
    component:ServiceComponent,
    children:
    [
      {
        path:'dev',
        component:DevComponent,
        pathMatch:'full'
      },
      {
        path:'testing',
        component:TestingComponent
      },
      {
        path:'design',
        component:DesignComponent
      }
    ]
  }
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
