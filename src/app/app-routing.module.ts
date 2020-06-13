import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'pacientes',
    pathMatch: 'full'
  },
  {
    path: 'folder/:id',
    loadChildren: () => import('./folder/folder.module').then( m => m.FolderPageModule)
  },
  {
    path: 'pacientes',
    loadChildren: () => import('./pages/pacientes/pacientes.module').then( m => m.PacientesPageModule)
  },
  {
    path: 'prestaciones/:uid',
    loadChildren: () => import('./pages/prestaciones/prestaciones.module').then( m => m.PrestacionesPageModule)
  },
  {
    path: 'add-paciente',
    loadChildren: () => import('./pages/add-paciente/add-paciente.module').then( m => m.AddPacientePageModule)
  },
  {
    path: 'detail-paciente/:uid',
    loadChildren: () => import('./pages/detail-paciente/detail-paciente.module').then( m => m.DetailPacientePageModule)
  },
  {
    path: 'add-prestacion',
    loadChildren: () => import('./pages/add-prestacion/add-prestacion.module').then( m => m.AddPrestacionPageModule)
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
