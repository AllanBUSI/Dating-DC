import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PersonProfilePageRoutingModule } from './person-profile-routing.module';

import { PersonProfilePage } from './person-profile.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PersonProfilePageRoutingModule
  ],
  declarations: [PersonProfilePage]
})
export class PersonProfilePageModule {}
