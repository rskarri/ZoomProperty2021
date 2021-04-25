import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LayoutModule } from './layout/layout.module';
import { HomePageComponent } from './home-page/home-page.component';
import { BannerComponent } from './banner/banner.component';
import { SearchProperiesComponent } from './search-properies/search-properies.component';
import { PropertyModule } from './property/property.module';

@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    BannerComponent,
    SearchProperiesComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    LayoutModule,
    PropertyModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
