import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthComponent } from './components/auth/auth.component';
import { BoardsComponent } from './components/boards/boards.component';
import { LoginGuard } from 'src/app/guards/login/login.guard';

const routes: Routes = [
  {
    path: '',
    component:AuthComponent,
  },
  {
    path: 'boards',
    component:BoardsComponent,
    canActivate: [LoginGuard],
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthRoutingModule { }
