import { NgClass, NgIf } from '@angular/common';
import { Component } from '@angular/core';
import { ResolveEnd, Router } from '@angular/router';
import {Location} from '@angular/common';
import { AuthService } from '../auth.service';

interface menu {
  name: string,
  path: string,
}

interface menuList {
  name: string,
  path: string,
  subMenu: menu[]
}

@Component({
  selector: 'SliderComponent',
  imports: [NgClass, NgIf],
  templateUrl: './slider.component.html',
  styleUrl: './slider.component.css'
})
export class SliderComponent {

  urlPath = ''

  constructor(
    private router: Router,
    private location: Location,
    private auth: AuthService
  ) {
  }

  ngOnInit() {
    this.urlPath = this.location.path()
    this.auth.checkAuthStatus()
    
    // 檢查網址列確定是否要顯示menu
    this.router.events.subscribe((event) => {
      if (event instanceof ResolveEnd ) {
        this.urlPath = event.url
        // 檢查登入狀態
        if (event.url !== '/') {
          this.auth.checkAuthStatus()
        }
      }
    });
  }

  menuList: menuList[] = [
    {
      name: "首頁",
      path: "/dash",
      subMenu: [
        {
          name: "單據點年度數據分析",
          path: "/chat1"
        },
        {
          name: "集團碳排放量年度分析",
          path: "/chat2"
        },
        {
          name: "年度區間排放量佔比分析報表",
          path: "/chat3"
        }
      ]
    },
    {
      name: "基本設定",
      path: "/basic",
      subMenu: []
    },
    {
      name: "填報設定",
      path: "/fill",
      subMenu: []
    },
    {
      name: "盤查文件",
      path: "/doc",
      subMenu: []
    },
    {
      name: "係數管理",
      path: "/factor",
      subMenu: []
    },
  ]

  goToPath(path: string) {
    console.log('path', path)
    this.router.navigate([path]);
  }

}
