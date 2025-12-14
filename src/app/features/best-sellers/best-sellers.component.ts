import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';

@Component({
    selector: 'app-best-sellers',
    standalone: true,
    imports: [CommonModule, RouterModule, HttpClientModule, MatCardModule, MatButtonModule, MatIconModule],
    templateUrl: './best-sellers.html',
    styleUrl: './best-sellers.scss'
})
export class BestSellersComponent implements OnInit {
    bestSellers: any[] = [];

    constructor(private http: HttpClient) { }

    ngOnInit() {
        this.http.get<any[]>('book_data.json').subscribe(data => {
            // Filter for bestsellers and maybe sort by rating or review count
            this.bestSellers = data
                .filter(book => book.bestseller)
                .sort((a, b) => b.ratings.average_rating - a.ratings.average_rating);
        });
    }

    onImageError(event: any) {
        const img = event.target;
        // Simple placeholder fallback logic
        if (img) {
            img.style.display = 'none';
            // Note: The HTML handles the display of the next sibling
        }
    }
}
