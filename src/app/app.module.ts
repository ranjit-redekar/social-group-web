import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import {MatUiModule} from './mat-ui/mat-ui.module';

import { AppComponent } from './app.component';
import { SigninComponent } from './signin/signin.component';
import { RegisterComponent } from './register/register.component';
import { SideNavComponent } from './side-nav/side-nav.component';
import { GroupsComponent } from './groups/groups.component';
import { AddMessComponent } from './add-mess/add-mess.component';
import { DayComponent } from './day/day.component';
import { AddLunchOrDinnerMenusComponent } from './add-lunch-or-dinner-menus/add-lunch-or-dinner-menus.component';
import {OverlayContainer, OverlayModule} from '@angular/cdk/overlay';

const appRouting: Routes = [
  {path: 'register', component: RegisterComponent},
  {path: 'signin', component: SigninComponent},
  {path: 'add-mess', component: AddMessComponent},
  {path: '', component: GroupsComponent},
];

@NgModule({
  declarations: [
    AppComponent,
    SigninComponent,
    RegisterComponent,
    SideNavComponent,
    GroupsComponent,
    AddMessComponent,
    DayComponent,
    AddLunchOrDinnerMenusComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRouting),
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    OverlayModule,
    MatUiModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
