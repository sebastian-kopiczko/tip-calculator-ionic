import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import {CalculatorPage} from '../pages/calculator/calculator';
import {MainPage} from '../pages/main/main';

@NgModule({
  declarations: [
    MyApp,
    CalculatorPage,
    MainPage
  ],
  imports: [
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    CalculatorPage,
    MainPage
  ],
  providers: [{provide: ErrorHandler, useClass: IonicErrorHandler}]
})
export class AppModule {}
