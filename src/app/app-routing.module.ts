import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { 
    path: '',
    loadChildren: () => 
      import('./pages/home/home.module').then(m => m.HomeModule) 
  },  
  { 
    path: 'home', 
    loadChildren: () => 
      import('./pages/home/home.module').then(m => m.HomeModule) }, 
  { 
    path: 'create-task', 
    loadChildren: () => 
      import('./pages/create-task/create-task.module').then(m => m.CreateTaskModule) 
  },
  { path: 'list', 
  loadChildren: () => 
  import('./pages/list/list.module').then(m => m.ListModule) },
  { 
    path: '**', 
    loadChildren: () => 
      import('./pages/home/home.module').then(m => m.HomeModule) 
  }
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
