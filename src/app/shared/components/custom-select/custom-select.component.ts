import {Component, ElementRef, forwardRef, Input, Renderer2} from '@angular/core';
import { CommonModule } from '@angular/common';
import {MaterialModule} from '../../../material.module';
import {ControlValueAccessor, NG_VALUE_ACCESSOR} from '@angular/forms';

@Component({
  selector: 'app-custom-select',
  standalone: true,
  imports: [CommonModule, MaterialModule],
  templateUrl: './custom-select.component.html',
  styleUrls: ['./custom-select.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => CustomSelectComponent),
      multi: true,
    },
  ],
})
export class CustomSelectComponent implements ControlValueAccessor{
  @Input()options: any;

  constructor(private renderer: Renderer2,private el: ElementRef) {
  }
  private onChange: (value: any) => void = () => {};
  private onTouched: () => void = () => {};

  registerOnChange(fn: any): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: any): void {
    this.onTouched = fn;
  }

  setDisabledState(isDisabled: boolean): void {
  }

  writeValue(obj: any): void {
      if (obj) {
        this.renderer.setProperty(this.el.nativeElement, 'value', obj);
      }
  }


  onSelectValue(key: string) {
    this.onChange(key)
  }
}
