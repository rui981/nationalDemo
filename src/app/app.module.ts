import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { ServiceWorkerModule } from '@angular/service-worker';
import { TranslateModule } from '@ngx-translate/core';
import {NgbModule, NgbPaginationModule} from '@ng-bootstrap/ng-bootstrap';

import { environment } from '@env/environment';
import { CoreModule } from '@app/core';
import { SharedModule } from '@app/shared';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { SearchComponent } from './components/search-page/search.component';
import { ReactiveFormsModule } from '@angular/forms';
import { DetailsComponent } from './components/details/details.component';
import {MovieDBService} from '@app/services/movie-db.service';
import {HeaderComponent} from '@app/components/header/header.component';



@NgModule({
  imports: [
    BrowserModule,
    ServiceWorkerModule.register('./ngsw-worker.js', { enabled: environment.production }),
    FormsModule,
    HttpClientModule,
    TranslateModule.forRoot(),
    NgbModule.forRoot(),
    CoreModule,
    SharedModule,
    AppRoutingModule,
    ReactiveFormsModule,
    NgbPaginationModule
  ],
  declarations: [AppComponent, SearchComponent, DetailsComponent, HeaderComponent],
  providers: [
    MovieDBService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
