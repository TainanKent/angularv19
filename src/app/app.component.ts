import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterOutlet, RouterModule, Router, ResolveEnd  } from '@angular/router';
import {
  TranslateService,
} from "@ngx-translate/core";
import { Location } from '@angular/common';
import { InputModule } from './components/input/input.module';
import { SliderComponent } from './components/slider/slider.component'
import { AuthService } from './auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  imports: [
    RouterOutlet, 
    RouterModule, 
    CommonModule,
    InputModule,
    SliderComponent
  ],
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'my-app';

  showTopMenu = false;
  // 設定多國語系資訊
  constructor(private translate: TranslateService, private Location: Location, private router: Router) {
    // this.translate.addLangs(['de', 'en']);
    this.translate.setDefaultLang('en');
    this.translate.use('tw');
  }

  ngOnInit() {
    // 檢查網址列確定是否要顯示menu
    this.router.events.subscribe((event) => {
      if (event instanceof ResolveEnd ) {
        this.showTopMenu = event.url !== '/'
      }
    });
  }

  // 修改語系
  changeLang($event: Event) {
    this.translate.use(($event.target as HTMLInputElement).value);
  }
}
