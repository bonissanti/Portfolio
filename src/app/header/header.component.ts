import { Component } from '@angular/core';

@Component({
  standalone: true,
  selector: 'app-header',
  imports: [],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {
  logo = 'Bruno R Onissanti'
  menu_items = [
    { label: 'home', link: '#', active: true },
    { label: 'portfolio', link: '#' },
    { label: 'blog', link: '#' },
    { label: 'about', link: '#' },
  ]
}
