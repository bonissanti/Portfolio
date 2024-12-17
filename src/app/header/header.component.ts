import { NgFor } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  standalone: true,
  selector: 'app-header',
  imports: [NgFor],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {
  logo = 'Bruno R Onissanti'
  menu_items = [
    { label: 'Home', link: '#', active: true },
    { label: 'Portfolio', link: '#' },
    { label: 'Blog', link: '#' },
    { label: 'About', link: '#' },
  ]
}
