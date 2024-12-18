import { Component, Input } from '@angular/core';
import { ButtonComponent } from "../shared/button/button.component";
import { NgIf } from '@angular/common';

@Component({
  standalone: true,
  selector: 'app-about-me',
  imports: [ButtonComponent, NgIf],
  templateUrl: './about-me.component.html',
  styleUrls: ['./about-me.component.scss', '../shared/button/button.component.scss']
})
export class AboutMeComponent {
  @Input() profilePic = '';
}
