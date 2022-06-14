import { NgModule } from '@angular/core';
import { BrowserModule, Title } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LoginComponent } from './login/login.component';
import { MatCardModule } from "@angular/material/card";
import { MatButtonModule } from "@angular/material/button";
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatIconModule} from '@angular/material/icon';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatProgressBarModule} from '@angular/material/progress-bar';
import {MatDividerModule} from '@angular/material/divider';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { ResetpasswordComponent } from './resetpassword/resetpassword.component';
import { NotfoundComponent } from './notfound/notfound.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatExpansionModule} from '@angular/material/expansion';
import { HomeComponent } from './home/home.component';
import { MatRippleModule } from '@angular/material/core';
import { HomeNavbarComponent } from './home-navbar/home-navbar.component';
import { HomeSliderComponent } from './home-slider/home-slider.component';
import { CarouselModule } from "ngx-bootstrap/carousel";
import { HomeIntroComponent } from './home-intro/home-intro.component';
import { HomeAdvantagesComponent } from './home-advantages/home-advantages.component';
import { HomeHowitsworkComponent } from './home-howitswork/home-howitswork.component';
import { HomeFactoriesComponent } from './home-factories/home-factories.component';
import { HomeStartnowComponent } from './home-startnow/home-startnow.component';
import { HomeBlogComponent } from './home-blog/home-blog.component';
import { HomeTestmonialsComponent } from './home-testmonials/home-testmonials.component';
import { HomeFooterComponent } from './home-footer/home-footer.component';
import {MatListModule} from '@angular/material/list';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatMenuModule } from '@angular/material/menu';
import { LayoutModule } from '@angular/cdk/layout';
import { DashboardIndexComponent } from './dashboard/dashboard-index/dashboard-index.component';
import {MatBadgeModule} from '@angular/material/badge';
import {MatChipsModule} from '@angular/material/chips';
import { NgxChartsModule } from '@swimlane/ngx-charts';
import {MatTableModule} from '@angular/material/table';
import {MatPaginatorModule} from '@angular/material/paginator';
import { DashboardServicesComponent } from './dashboard/dashboard-services/dashboard-services.component';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatNativeDateModule} from '@angular/material/core';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import {MatDialogModule} from '@angular/material/dialog';
import { ConfirmationComponent } from './dashboard/utilties/confirmation/confirmation.component';
import { DashboardFactoriesComponent } from './dashboard/dashboard-factories/dashboard-factories.component';
@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    ResetpasswordComponent,
    NotfoundComponent,
    DashboardComponent,
    HomeComponent,
    HomeNavbarComponent,
    HomeSliderComponent,
    HomeIntroComponent,
    HomeAdvantagesComponent,
    HomeHowitsworkComponent,
    HomeFactoriesComponent,
    HomeStartnowComponent,
    HomeBlogComponent,
    HomeTestmonialsComponent,
    HomeFooterComponent,
    DashboardIndexComponent,
    DashboardServicesComponent,
    ConfirmationComponent,
    DashboardFactoriesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatCardModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    MatIconModule,
    MatToolbarModule,
    MatProgressBarModule,
    MatDividerModule,
    MatSidenavModule,
    MatExpansionModule,
    MatRippleModule,
    MatListModule,
    CarouselModule,
    FormsModule,
    MatGridListModule,
    MatMenuModule,
    LayoutModule,
    MatBadgeModule,
    MatChipsModule,
    NgxChartsModule,
    MatTableModule,
    MatPaginatorModule,
    MatCheckboxModule,
    ReactiveFormsModule ,
    MatDatepickerModule,
    MatNativeDateModule,
    MatSnackBarModule,
    MatDialogModule
     
  ],
  providers: [ Title],
  bootstrap: [AppComponent]
})
export class AppModule { }
