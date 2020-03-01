import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TerenuriComponent } from './terenuri/terenuri.component';
import { SearchComponent } from './search/search.component';
import { TerenSelectatComponent } from './teren-selectat/teren-selectat.component';
import { CalendarComponent } from './calendar/calendar.component';
import { ModalContentComponent } from './modal-content/modal-content.component';


const routes: Routes = [
  {path:'', component:SearchComponent, pathMatch:'full'},
  {path:'terenuri/:sector/:sport', component: TerenuriComponent},
  {path:'teren/:nume/:id', component: TerenSelectatComponent, 
        children: 
            [{path:'calendar', component: CalendarComponent}, {path:'book', component: ModalContentComponent}]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
