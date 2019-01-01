import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import {InputTextModule} from 'primeng/inputtext';
import {AutoCompleteModule} from 'primeng/autocomplete';
import {MenubarModule} from 'primeng/menubar';
import {SidebarModule} from 'primeng/sidebar';
import { AccordionModule } from 'primeng/components/accordion/accordion';
import { PanelModule } from 'primeng/components/panel/panel';
import { ButtonModule } from 'primeng/components/button/button';
import { RadioButtonModule } from 'primeng/components/radioButton/radioButton';
import {MenuModule} from 'primeng/menu';
import {TabMenuModule} from 'primeng/tabmenu';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { TransactionsComponent } from './transactions/transactions.component';
import { SettingsComponent } from './settings/settings.component';
import {ChartModule} from 'primeng/chart';
import {DataViewModule} from 'primeng/dataview';
import {FieldsetModule} from 'primeng/fieldset';
import {KeyFilterModule} from 'primeng/keyfilter';
import {InputTextareaModule} from 'primeng/inputtextarea';
import { StoreModule } from '@ngrx/store';
import { reducers, metaReducers } from './reducers';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { environment } from '../environments/environment';
import { EffectsModule } from '@ngrx/effects';
import { AppEffects } from './app.effects';
import { TransactionRowComponent } from './transaction-row/transaction-row.component';
import { ReportsComponent } from './reports/reports.component';
import { TopTransactionsComponent } from './top-transactions/top-transactions.component';
import { TopClientsComponent } from './top-clients/top-clients.component';
import { TopDebtorsComponent } from './top-debtors/top-debtors.component';
import {InputSwitchModule} from 'primeng/inputswitch';
import { TransactionHeaderRowComponent } from './transaction-header-row/transaction-header-row.component';
import { TransactionTotalRowComponent } from './transaction-total-row/transaction-total-row.component';

const routes : Routes = [
  {path : '' , component : LoginComponent, data: { title: 'Welcome to Vault' }},
  {path : 'home' , component : HomeComponent, data : { title : 'Business Vault'}}
];

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    DashboardComponent,
    TransactionsComponent,
    SettingsComponent,
    TransactionRowComponent,
    ReportsComponent,
    TopTransactionsComponent,
    TopClientsComponent,
    TopDebtorsComponent,
    TransactionHeaderRowComponent,
    TransactionTotalRowComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    InputTextModule,
    BrowserAnimationsModule,
    RouterModule.forRoot(routes),
    FormsModule,
    AccordionModule,
    PanelModule,
    ButtonModule,
    RadioButtonModule,
    MenuModule,
    MenubarModule,
    TabMenuModule,
    SidebarModule,
    ChartModule,
    DataViewModule,
    AutoCompleteModule,
    FieldsetModule,
    InputTextareaModule,
    KeyFilterModule,
    InputSwitchModule,
    StoreModule.forRoot(reducers, { metaReducers }),
    !environment.production ? StoreDevtoolsModule.instrument() : [],
    EffectsModule.forRoot([AppEffects])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
