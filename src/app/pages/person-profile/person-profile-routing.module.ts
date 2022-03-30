import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PersonProfilePage } from './person-profile.page';

const routes: Routes = [
  {
    path: '',
    component: PersonProfilePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PersonProfilePageRoutingModule {}
