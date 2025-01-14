import { NgModule } from '@angular/core';
import { InputComponent } from './inputcomponent';
import { ButtonComponent } from '../button/button.component';

@NgModule({
  declarations: [],
  imports: [
    InputComponent, ButtonComponent
  ],
  exports: [InputComponent, ButtonComponent]
})
export class InputModule { }
