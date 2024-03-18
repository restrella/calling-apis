import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FirstComponent } from './first/first.component';
import { SecondComponent } from './second/second.component';
import { ThirdComponent } from './third/third.component';
import { BookResolver } from './resolvers/book.resolver';
import { DeactivateGuard } from './guards/deactivate.guard';
import { ActivateGuard } from './guards/activate.guard';
import { FirstChildComponent } from './first-child/first-child.component';
import { SecondChildComponent } from './second-child/second-child.component';
import { ActivateChildGuard } from './guards/activate-child.guard';
import { LoadGuard } from './guards/load.guard';

const routes: Routes = [
  {
    path: '',
    component: FirstComponent,
  },
  {
    // path: 'second/:id',
    // path: 'second/:id/:name/:age',
    path: 'second',
    component: SecondComponent,
    canActivateChild: [ActivateChildGuard],
    children: [
      {
        path: 'firstChild',
        component: FirstChildComponent,
      },
      {
        path: 'secondChild',
        component: SecondChildComponent,
      },
    ],
  },
  {
    path: 'third',
    // canActivate: [ActivateGuard],
    canDeactivate: [DeactivateGuard],
    component: ThirdComponent,
    resolve: {
      books: BookResolver,
    },
  },
  {
    path: 'fourth',
    canLoad: [LoadGuard],
    loadChildren: () => import('./lazy/lazy.module').then((m) => m.LazyModule),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
