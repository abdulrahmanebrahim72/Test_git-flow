import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { PortfolioComponent } from './portfolio/portfolio.component';
import { ContactComponent } from './contact/contact.component';
import { AppComponent } from './app.component';
import { StartFrameworckComponent } from './start-frameworck/start-frameworck.component';

const routes: Routes = [
  {path:'' , redirectTo:"startFrameworck" , pathMatch:"full" ,title:"Home"},
  {path:"startFrameworck" , component:StartFrameworckComponent ,title:"Home", data: {animation:  'startFrameworck'}},
  {path:"about" , component:AboutComponent ,title:"About", data: {animation:  'about'}},
  {path:"portfolio" , component:PortfolioComponent ,title:"Portfolio", data: {animation:  'portfolio'}},
  {path:"contact" , component:ContactComponent ,title:"Contact Us", data: {animation:  'contact'}},
  { path: 'test', data: {animation:  'test'}, loadChildren: () => import('./test/test.module').then(m => m.TestModule) },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {useHash:false})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
