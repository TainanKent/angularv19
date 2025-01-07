import { Component, Input, forwardRef  } from '@angular/core';
import { ControlValueAccessor, FormControl, NG_VALUE_ACCESSOR, ReactiveFormsModule } from '@angular/forms';
import {
  TranslatePipe,
} from "@ngx-translate/core";

/**
 * Angular 在執行元件程式時，會檢查此元件是否包含 NG_VALUE_ACCESSOR 的設定，若有，則將此元件視為一個表單控制項
 * 設定providers 讓外部的form 資料可以帶入與讓元件可以有操作原生element 的功能
 * https://medium.com/jiingler/angular-%E8%AA%8D%E8%AD%98-controlvalueaccessor-c19c7d47ba3
 */
@Component({
  selector: 'InputComponent',
  templateUrl: './input.component.html',
  imports: [ReactiveFormsModule, TranslatePipe],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => InputComponent),
      multi: true
    },
  ]
})
export class InputComponent implements ControlValueAccessor {
  onChanged: any = () => {};
  onTouched: any = () => {};
  constructor() { }

  @Input() labelTest = ''
  @Input() placeholder = ''
  @Input() type = 'text'
  value = new FormControl('');
  newValue = ''

  onChange(event: Event) {
    this.newValue = (event.target as HTMLInputElement).value
    this.value?.setValue(this.newValue); 
    this.onChanged(this.newValue)
  }

  writeValue(value: any) {
    this.value?.setValue(value); 
  };

  registerOnChange(fn: any) {
    this.onChanged = fn;
  }

  registerOnTouched(fn: any) {
    this.onTouched = fn;
  }
}
