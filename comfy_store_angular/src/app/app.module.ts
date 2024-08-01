import { isDevMode, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { provideHttpClient } from '@angular/common/http'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StoreModule } from '@ngrx/store';
import { productsReducer } from './state/products/products.reducers';
import { EffectsModule } from '@ngrx/effects';
import { productsEffects } from './state/products/products.effects';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { ProductsComponent } from './products/products.component';
import { IonicStorageModule } from '@ionic/storage-angular';
import { cartReducer } from './state/cart/cart.reducer';
import { cartEffects } from './state/cart/cart.effects';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './home/home.component';
import { RouterModule, Routes } from '@angular/router';
import { ProductComponent } from './product/product.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { FormsModule } from '@angular/forms';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'products',
    component: ProductsComponent
  }
]

@NgModule({
  declarations: [
    AppComponent,
    ProductsComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    ProductComponent,
    SidebarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    RouterModule.forRoot(routes),
    IonicStorageModule.forRoot(),
    StoreModule.forRoot({ products: productsReducer, cart: cartReducer }),
    EffectsModule.forRoot([productsEffects, cartEffects]),
    StoreDevtoolsModule.instrument({ maxAge: 25, logOnly: !isDevMode() }),
    StoreDevtoolsModule.instrument({
      maxAge: 25
    })
  ],
  providers: [provideHttpClient()],
  bootstrap: [AppComponent]
})
export class AppModule { }
