import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdminComponent } from './admin.component';
import { WatchlistComponent } from './watchlist/watchlist.component';
import { SolvedComponent } from './solved/solved.component';
import { InterceptorComponent } from './interceptor/interceptor.component';


const routes: Routes = [
  {
    path: '',
    component: AdminComponent,
    children: [
      {path: '', component: WatchlistComponent},
      {path: 'watchlist', component: WatchlistComponent},
      {path: 'solved', component: SolvedComponent},
      {path: 'interceptor', component: InterceptorComponent}
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
export const AdminRoutingComponents = [AdminComponent, WatchlistComponent, SolvedComponent, InterceptorComponent];
