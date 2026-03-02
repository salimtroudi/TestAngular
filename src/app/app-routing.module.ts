import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListResSalimTroudiComponent } from './list-resSalimTroudi/list-resSalimTroudi.component';

import { HomeComponent } from './home/home.component';
import { NotfoundComponent } from './notfound/notfound.component';
import {DetailsComponent} from './details/details.component';
const routes: Routes = [
    {path: '', redirectTo: 'home', pathMatch: 'full'}, //redirect to home
    {path: 'home', component: HomeComponent},
  {path:'list', component: ListResSalimTroudiComponent},
  {path:'details/:id',component:DetailsComponent},

     //not found obligatory to put it in the last
    {path: '**', component: NotfoundComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
