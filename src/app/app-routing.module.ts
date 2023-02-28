import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'books',
    loadChildren: () => import('./pages/books/books.module').then((b) => b.BooksPageModule),
  },
  {
    path: 'cars',
    loadChildren: () => import('./pages/cars/cars.module').then(m => m.CarsPageModule),
  },
  { path: '**', redirectTo: 'books' }
];


@NgModule({
  imports: [RouterModule.forRoot(routes, {
    preloadingStrategy: PreloadAllModules
  })],
  exports: [RouterModule]
})
export class AppRoutingModule { }