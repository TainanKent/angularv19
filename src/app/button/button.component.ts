import { Component, forwardRef, Input } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';
import {
  TranslatePipe,
} from "@ngx-translate/core";

@Component({
  selector: 'ButtonComponent',
  imports: [TranslatePipe],
  templateUrl: './button.component.html',
  styleUrl: './button.component.css',
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => ButtonComponent),
      multi: true
    },
  ]
})
export class ButtonComponent {
  @Input() click = ($event: MouseEvent) => {}
  @Input() type = "submit"
  @Input() name = ""
} 
