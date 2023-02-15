import { NgModule } from '@angular/core'
import { FormsModule } from '@angular/forms'
import { BrowserModule } from '@angular/platform-browser'
import { NgSelectModule } from '@ng-select/ng-select'
import { AppComponent } from './app.component'
import { CustomerComponent } from './customer/customer.component'
import { StaffComponent } from './staff/staff.component'
import { NavigationComponent } from './navigation/navigation.component'
import { RouterModule } from '@angular/router'
import { HomeComponent } from './home/home.component'

@NgModule({
  declarations: [
    AppComponent,
    CustomerComponent,
    StaffComponent,
    NavigationComponent,
    HomeComponent,
  ],
  imports: [
    BrowserModule,
    NgSelectModule,
    FormsModule,
    RouterModule.forRoot([
      { path: '', component: HomeComponent, pathMatch: 'full' },
      { path: 'customer', component: CustomerComponent },
      { path: 'staff', component: StaffComponent },
    ]),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
