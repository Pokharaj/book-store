import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { MatIconModule } from '@angular/material/icon';

@Component({
    selector: 'app-categories',
    standalone: true,
    imports: [CommonModule, RouterModule, MatIconModule],
    templateUrl: './categories.html',
    styleUrl: './categories.scss'
})
export class CategoriesComponent {
    categories = [
        { name: 'Fiction', icon: 'auto_stories', image: 'assets/cat-fiction.jpg' },
        { name: 'Non-Fiction', icon: 'menu_book', image: 'assets/cat-nonfiction.jpg' },
        { name: 'Thriller', icon: 'local_fire_department', image: 'assets/cat-thriller.jpg' },
        { name: 'Mystery', icon: 'visibility', image: 'assets/cat-mystery.jpg' },
        { name: 'Romance', icon: 'favorite', image: 'assets/cat-romance.jpg' },
        { name: 'Science', icon: 'science', image: 'assets/cat-science.jpg' },
        { name: 'History', icon: 'history_edu', image: 'assets/cat-history.jpg' },
        { name: 'Biography', icon: 'person', image: 'assets/cat-bio.jpg' }
    ];
}
