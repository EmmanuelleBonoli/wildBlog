import { Component, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import {
  ArticleService,
  Article,
} from '../service/article-service/article-service.component';

@Component({
  selector: 'app-home-page',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './home-page.component.html',
  styleUrl: './home-page.component.scss',
})
export class HomePageComponent {
  articles: Article[] = [];
  articleService: ArticleService = inject(ArticleService);

  ngOnInit() {
    this.articles = this.articleService.getArticles();
  }
}
