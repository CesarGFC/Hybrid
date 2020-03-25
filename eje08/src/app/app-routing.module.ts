import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./tabs/tabs.module').then(m => m.TabsPageModule)
  },
  {
    path: 'new-prod',
    loadChildren: () => import('./pages/new-prod/new-prod.module').then( m => m.NewProductPageModule)
  },
  {
    path: 'compras',
    loadChildren: () => import('./COMPRAS/compras/compras.module').then( m => m.ComprasPageModule)
  },
  {
    path: 'detalles',
    loadChildren: () => import('./PAGINA/detalles/detalles.module').then( m => m.DetallesPageModule)
  }
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
