import { Component, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import {
  ArticleService,
  Article,
} from '../service/article-service/article-service.component';
import { ArticleComponentComponent } from '../article-component/article-component.component';
import { HeaderComponent } from '../header/header.component';
@Component({
  selector: 'app-home-page',
  standalone: true,
  imports: [RouterLink, ArticleComponentComponent, HeaderComponent],
  templateUrl: './home-page.component.html',
  styleUrl: './home-page.component.scss',
})
export class HomePageComponent {
  articles: Article[] = [];
  articleService: ArticleService = inject(ArticleService);

  statusUser: boolean = true;

  ngOnInit() {
    this.articles = this.articleService.getArticles();
  }
}
