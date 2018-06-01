import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
// import { LivechatWidgetModule } from '@livechat/angular-widget';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app.routing';
import { HomeComponent } from './home/home.component';
import { ContactComponent } from './contact/contact.component';
import { CoreModule } from './core.module';

@NgModule({
  imports:      [ 
    BrowserModule, 
    FormsModule, 
    AppRoutingModule, 
    // LivechatWidgetModule,
    CoreModule.forRoot()
  ],
  declarations: [ 
    AppComponent, 
    HomeComponent, 
    ContactComponent 
  ],
  bootstrap:    [ 
    AppComponent 
  ],
  providers: [ 
  ]
})
export class AppModule { }
