import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { MatCheckboxModule, MatRadioModule, MatSelectModule, MatInputModule, MatButtonModule } from '@angular/material';

import { AppComponent } from './app.component';
import { ServerComponent } from './server/server.component';
import { ServersComponent } from './servers/servers.component';
import { CheckboxesMaterialComponent } from './checkboxes-material/checkboxes-material.component';
import { HeaderComponent } from './header/header.component';
import { RadioMaterialComponent } from './radio-material/radio-material.component';
import { SelectComponent } from './select/select.component';
import { SidebarComponent } from './sidebar/sidebar.component';

@NgModule({
  declarations: [
    AppComponent,
    ServerComponent,
    ServersComponent,
    CheckboxesMaterialComponent,
    HeaderComponent,
    RadioMaterialComponent,
    SelectComponent,
    SidebarComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    MatCheckboxModule,
    MatRadioModule,
    MatSelectModule,
    MatInputModule,
    ReactiveFormsModule,
    MatButtonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
