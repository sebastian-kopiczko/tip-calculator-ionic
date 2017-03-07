import {Component} from '@angular/core';
import {App, NavController, ActionSheetController} from 'ionic-angular';
import {CalculatorPage} from '../calculator/calculator';

@Component({
  selector: 'page-main',
  templateUrl: 'main.html'
})
export class MainPage {
  language: string;
  cancelMsg: string;
  msgBtn: string;
  chooseTitle: string;

  constructor(private _app: App, public navCtrl: NavController, public actionSheetCtrl: ActionSheetController) {
    this._app.setTitle("TipCalc");
    this.language = "eng";
    this.cancelMsg = "Close";
    this.msgBtn = "Count it";
    this.chooseTitle = "Choose language";
  }

  chooseLang() {
    let langList = this.actionSheetCtrl.create({
      title: this.chooseTitle,
      buttons: [
        {
          text: 'English',
          handler: () => {
            this.language = 'eng';
            this.msgBtn = "Count it"
          }
        }, {
          text: 'Polski',
          handler: () => {
            this.language = 'pol';
            this.msgBtn = "Oblicz";
            this.chooseTitle = "Wybierz język"
          }
        }
      ]
    });
    langList.present();
  }

  pushPage() {
    this.navCtrl.push(CalculatorPage, {
      lang: this.language
    });
  }
}
