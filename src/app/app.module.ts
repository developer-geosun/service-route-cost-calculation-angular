import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';

// Layout компоненти
import { ToolbarComponent } from './layout/toolbar/toolbar.component';
import { FooterComponent } from './layout/footer/footer.component';

// Shared компоненти
import { LogoComponent } from './shared/components/logo/logo.component';
import { SocialIconComponent } from './shared/components/social-icon/social-icon.component';

// Pages компоненти
import { MainComponent } from './pages/main/main.component';
import { NotFoundComponent } from './pages/not-found/not-found.component';
import { StopServiceComponent } from './pages/stop-service/stop-service.component';

@NgModule({
  declarations: [
    AppComponent,
    // Layout
    ToolbarComponent,
    FooterComponent,
    // Shared
    LogoComponent,
    SocialIconComponent,
    // Pages
    MainComponent,
    NotFoundComponent,
    StopServiceComponent
  ],
  imports: [
    BrowserModule,
    CommonModule,
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
