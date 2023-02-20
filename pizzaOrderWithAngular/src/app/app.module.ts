import { NgModule } from '@angular/core';
import { FormsModule, NG_VALIDATORS } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { NgSelectModule } from '@ng-select/ng-select';
import { AppComponent } from './app.component';
import { CustomerComponent } from './components/customer/customer.component';
import { StaffComponent } from './components/staff/staff.component';
import { NavigationComponent } from './components/navigation/navigation.component';
import { RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { OrderComponent } from './components/order/order.component';
import { ModalModule } from 'ngx-bootstrap/modal';
import { EmailDirective } from './Directives/emailValidator.directive';
import { NameDirective } from './Directives/nameValidator.directive';
import { PhoneDirective } from './Directives/phoneNumberValidator.directive';

@NgModule({
  declarations: [
    AppComponent,
    CustomerComponent,
    StaffComponent,
    NavigationComponent,
    HomeComponent,
    OrderComponent,
    EmailDirective,
    NameDirective,
    PhoneDirective,
  ],
  imports: [
    BrowserModule,
    NgSelectModule,
    ModalModule.forRoot(),
    FormsModule,
    RouterModule.forRoot([
      { path: '', component: HomeComponent, pathMatch: 'full' },
      { path: 'customer', component: CustomerComponent },
      { path: 'staff', component: StaffComponent },
      { path: 'order', component: OrderComponent },
    ]),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
