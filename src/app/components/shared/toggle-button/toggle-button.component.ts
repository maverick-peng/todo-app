import { Component, HostBinding, HostListener } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ControlValueAccessor, FormsModule, NG_VALUE_ACCESSOR } from '@angular/forms';

@Component({
  selector: 'app-toggle-button',
  standalone: true,
  imports: [CommonModule, FormsModule],
  template: `
    <input #input [checked]="checked" (change)="handleChange(input.checked)" [disabled]="disabled" type="checkbox" class="ml-auto appearance-none relative before:content-[''] h-6 before:block before:w-12 before:h-6 before:rounded-full before:bg-white before:shadow-inner-lg before:align-middle after:content-[''] after:block after:w-5 after:h-5 after:bg-slate-200 after:rounded-full after:absolute after:top-[2px] after:left-[2px] checked:after:bg-green-600 checked:after:left-[1.6rem] checked:after:transition-all" />
  `,
  styles: [`
    :host {
      @apply flex items-center;
    }
  `],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: ToggleButtonComponent,
      multi: true
    }
  ]
})
export class ToggleButtonComponent implements ControlValueAccessor {

  checked: boolean = false;

  disabled: boolean = false;

  onChange: (value: any) => void = () => { };

  onTouched: () => void = () => { };

  @HostBinding('attr.tabIndex')
  tabIndex = 0;

  @HostListener('blur')
  onTouch(): void {
    this.onTouched();
  }

  writeValue(val: boolean): void {
    this.checked = val;
  }

  registerOnChange(fn: any): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: any): void {
    this.onTouched = fn;
  }

  setDisabledState?(isDisabled: boolean): void {
    this.disabled = isDisabled;
  }

  handleChange(val: any) {
    this.onChange(val);
  }

}
