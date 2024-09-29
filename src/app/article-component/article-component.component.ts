import { Component, Input } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

export interface Article {
  title: string;
  author: string;
  content: string;
  image: string;
  isPublished: boolean;
  comment: string;
  likes: number;
}

@Component({
  selector: 'app-article-component',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './article-component.component.html',
  styleUrl: './article-component.component.scss',
})
export class ArticleComponentComponent {
  @Input() article!: Article;

  togglePublication(): void {
    this.article.isPublished = !this.article.isPublished;
  }

  isAdmin: boolean = true;

  toggleIsAdmin(): void {
    this.isAdmin = !this.isAdmin;
  }
}
