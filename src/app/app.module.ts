import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { LogoComponent } from './logo/logo.component';
import { IconTelegramComponent } from './icon-telegram/icon-telegram.component';
import { IconWhatsappComponent } from './icon-whatsapp/icon-whatsapp.component';
import { IconViberComponent } from './icon-viber/icon-viber.component';
import { IconFacebookComponent } from './icon-facebook/icon-facebook.component';

@NgModule({
  declarations: [
    AppComponent,
    LogoComponent,
    IconTelegramComponent,
    IconWhatsappComponent,
    IconViberComponent,
    IconFacebookComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatButtonModule,
    MatCardModule,
    MatIconModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
