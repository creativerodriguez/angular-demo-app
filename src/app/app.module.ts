import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AppComponent } from './app.component';
import { ServerComponent } from './server/server.component';
import { ServersComponent } from './servers/servers.component';
import { ProductsComponent } from './products/products.component';
import { RatingComponent } from './rating/rating.component';
import { ProductComponent } from './product/product.component';
import { TruncatePipe } from './products/truncate.pipe';
import { BsJumbotronComponent } from './bs-jumbotron/bs-jumbotron.component';
import { UserComponent } from './user/user.component';
import { ReactiveFormsModule } from '@angular/forms';
import { MdfComponent } from './mdf/mdf.component';
import { LoginService } from './mdf/login.service';

@NgModule({
  declarations: [
    AppComponent,
    ServerComponent,
    ServersComponent,
    ProductsComponent,
    RatingComponent,
    ProductComponent,
    TruncatePipe,
    BsJumbotronComponent,
    UserComponent,
    MdfComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    ReactiveFormsModule
  ],
  providers: [LoginService],
  bootstrap: [AppComponent]
})
export class AppModule { }
