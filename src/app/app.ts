import { Component, signal } from '@angular/core';
import { RouterOutlet, RouterModule, Router, NavigationEnd } from '@angular/router';
import { filter } from 'rxjs/operators';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatBadgeModule } from '@angular/material/badge';
import { MatMenuModule } from '@angular/material/menu';
import { MatButtonModule } from '@angular/material/button';
import { CommonModule } from '@angular/common';
import { Inject, OnInit } from '@angular/core';
import { DOCUMENT } from '@angular/common';
import { CartService } from './features/cart/cart.service';
import { SearchService } from './shared/services/search.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, RouterModule, MatToolbarModule, MatIconModule, MatBadgeModule, CommonModule, MatMenuModule, MatButtonModule],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App implements OnInit {
  protected readonly title = signal('book-shopping');
  cartCount = 0;
  showSearch = true;

  constructor(private cartService: CartService, private searchService: SearchService, private router: Router) {
    this.router.events.pipe(
      filter(event => event instanceof NavigationEnd)
    ).subscribe((event: any) => {
      // Show search only on home page (empty path or /)
      this.showSearch = event.url === '/' || event.url === '/home' || event.url.startsWith('/?');
    });
  }

  onSearch(event: any) {
    this.searchService.setSearchTerm(event.target.value);
  }

  ngOnInit() {
    this.cartService.cartCount$.subscribe(count => {
      this.cartCount = count;
    });
  }

  onLogoLoad(event: any) {
    // Add loaded class for smooth animation
    const img = event.target;
    img.classList.add('loaded');
  }

  onLogoError(event: any) {
    // Hide the logo and show fallback icon
    const img = event.target;
    const fallback = img.nextElementSibling;
    if (img && fallback) {
      img.style.display = 'none';
      fallback.style.display = 'flex';
    }

    // Log the error for debugging
    console.warn('Logo failed to load:', img.src);
  }
}
