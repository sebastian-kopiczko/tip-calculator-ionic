import {Component} from '@angular/core';
import {NavParams} from 'ionic-angular';

@Component({
  selector: 'page-calculator',
  templateUrl: 'calculator.html'
})
export class CalculatorPage {
  textLang: any;
  tip;
  people: number;
  serviceRate: number;
  totalBill: number;
  lang: string;
  currency: string;
  finalPrice: string;

  constructor(private navParams: NavParams) {
    this.lang = navParams.get('lang');
    this.lang === "eng" ? this.setLanguageEng() : this.setLanguagePol();
  }

  setLanguageEng() {
    this.textLang = {
      currency: "Currency",
      bill: "Total bill",
      people: "People sharing the bill",
      service: "Rate your service",
      btn: "Calculate",
      rates: ['Gorgeous', 'Good', 'Fine', 'Bad', 'Awful'],
      finalMsg: "Everyone has to tip ",
      errorPpl: "Insert proper number of people",
      errorBill: "Insert proper price, ex. 49.99",
      cancel: "Cancel"
    };
  }

  setLanguagePol() {
    this.textLang = {
      currency: "Waluta",
      bill: "Kwota rachunku",
      people: "Ile osób płaci napiwek",
      service: "Oceń obsługę",
      btn: "Oblicz",
      rates: ['Wspaniale', 'Dobrze', 'W porządku', 'Słabo', 'Tragicznie'],
      finalMsg: "Każdy musi złożyć się po ",
      errorPpl: "Wprowadź prawidłową ilość osób",
      errorBill: "Wprowadź poprawny format ceny, np. 49.99",
      cancel: "Anuluj"
    };
  }

  validateInputs() {
    this.validateBill(this.totalBill);

    if (this.people % 1 !== 0) {
      alert(this.textLang.errorPpl);
    }
  }

  validateBill(bill) {
    let pattern = /^\d+(.\d{1,2})?$/;
    if (!pattern.test(bill)) {
      alert(this.textLang.errorBill);
    }
  }

  showTip() {
    this.validateInputs();
    this.tip = Number(Number((this.totalBill * this.serviceRate) / this.people).toFixed(2));

    switch (this.currency) {
      case "usd":
        this.finalPrice = "$ " + this.tip;
        break;
      case "euro":
        this.finalPrice = this.tip + " €";
        break;
      case "pln":
        this.finalPrice = this.tip + " zł";
        break;
    }
    // this.currency === "usd" ? this.finalPrice = "$ " + this.tip : this.finalPrice = this.tip + "€";
    let result = document.getElementById('result');
    result.classList.remove('hidden');
  }
}
