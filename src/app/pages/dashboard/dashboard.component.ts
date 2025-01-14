import { Component } from '@angular/core';
import {
  TranslatePipe,
} from "@ngx-translate/core";
import { HighlightDirective } from '../../highlight.directive'

@Component({
  selector: 'app-dashboard',
  imports: [TranslatePipe, HighlightDirective],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})
export class DashboardComponent {

}
