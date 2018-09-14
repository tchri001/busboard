import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes} from '@angular/router';
import { Component1Component } from './component1/component1.component';
import { StopShowComponent } from './stop-show/stop-show.component';


const routes: Routes = [
  { path: '', redirectTo: '/stops', pathMatch: 'full' },
  { path: 'stops', component: StopShowComponent },
  { path: 'stop/:id', component: Component1Component }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})

export class AppRoutingModule {}


