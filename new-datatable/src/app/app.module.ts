import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MatTableModule } from '@angular/material';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { UserTableComponent } from './user-table/user-table.component';
import { UserService } from './services/user.service';

@NgModule({
  declarations: [
    AppComponent,
    UserTableComponent
  ],
  imports: [
    BrowserModule,
    MatTableModule,
    HttpClientModule
  ],
  providers: [UserService],
  bootstrap: [AppComponent]
})
export class AppModule { }
