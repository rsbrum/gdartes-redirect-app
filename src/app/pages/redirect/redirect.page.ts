import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-redirect',
  templateUrl: './redirect.page.html',
  styleUrls: ['./redirect.page.scss'],
})
export class RedirectPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  openApp() {
    window.open('https://app.geradordeartes.com.br', '_system', 'location=yes'); return false;
  }

  openWpp() {
    window.open('https://api.whatsapp.com/send?phone=+5554984091254&text=False conosco!', '_system', 'location=yes'); return false;
  }

}
