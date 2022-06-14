import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardFactoriesComponent } from './dashboard/dashboard-factories/dashboard-factories.component';
import { DashboardIndexComponent } from './dashboard/dashboard-index/dashboard-index.component';
import { DashboardServicesComponent } from './dashboard/dashboard-services/dashboard-services.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { NotfoundComponent } from './notfound/notfound.component';
import { ResetpasswordComponent } from './resetpassword/resetpassword.component';

const routes: Routes = [
      {path: '', redirectTo: '/home', pathMatch: 'full' },
      {path:'login',component:LoginComponent},
      {path:'home',component:HomeComponent},
      {path:'resetpassword',component:ResetpasswordComponent},
      {path:'dashboard',component:DashboardComponent,
      children:[{
          path:'',
          component:DashboardIndexComponent,
          
      },{
        path:'home',
        component:DashboardIndexComponent
      },
      {
        path:'services',
        component:DashboardServicesComponent
      },
      {
        path:'factories',
        component:DashboardFactoriesComponent
      }
    ]
    },
      { path: '**', component: NotfoundComponent  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
