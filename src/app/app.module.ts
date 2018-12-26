import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import{RouterModule,Routes} from '@angular/router';

import { AppComponent } from './app.component';
import { SandboxComponent } from './components/sandbox.component';
import {DataService} from './services/data.service';
import { HomeComponent } from './components/home/home.component';
import { AboutComponent } from './components/about/about.component';
import { NavbarComponent } from './components/navbar/navbar.component';

const appRoutes:Routes = [
  {path:'',component:HomeComponent},
  {path:'about',component:AboutComponent},
  {path:'users',component:SandboxComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    SandboxComponent,
    HomeComponent,
    AboutComponent,
    NavbarComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot(appRoutes)    
  ],
  providers: [DataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
