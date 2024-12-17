import { CommonModule } from '@angular/common';
import { Component, input, Input, NgModule } from '@angular/core';

@Component({
  standalone: true,
  selector: 'app-button',
  imports: [CommonModule],
  template: `<button [ngClass]="buttonType">{{ label }}</button>`,
  styleUrls: ['./button.component.scss']
})

export class ButtonComponent {
    @Input() label = 'Button';
    @Input() buttonType: 'Primary' | 'Secondary' = 'Primary'
}
