import {Component, Input} from '@angular/core';
import { CommonModule } from '@angular/common';
import {MaterialModule} from '../../../../material.module';

@Component({
  selector: 'app-options',
  standalone: true,
  imports: [CommonModule, MaterialModule],
  templateUrl: './options.component.html',
  styleUrls: ['./options.component.scss']
})
export class OptionsComponent {
  @Input()options: any

  onSelectValue(key: string) {
    
  }
}
