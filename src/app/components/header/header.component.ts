import { Component, signal } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { RouterLink } from '@angular/router';
import { NgIf, NgFor } from '@angular/common';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [MatIconModule, MatButtonModule, RouterLink, NgIf, NgFor],
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent {
  // Controls mobile menu visibility
  isMenuOpen = signal(false);

  menuItems = ['Home', 'About', 'Services', 'Contact'];

  toggleMenu() {
    this.isMenuOpen.update(v => !v);
  }
}
