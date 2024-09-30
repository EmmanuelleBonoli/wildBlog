import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { ParamMap } from '@angular/router';
import {
  ArticleService,
  Article,
} from '../service/article-service/article-service.component';

@Component({
  selector: 'app-article-component',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './article-component.component.html',
  styleUrl: './article-component.component.scss',
})
export class ArticleComponentComponent {
  article!: Article;
  route: ActivatedRoute = inject(ActivatedRoute);
  articleId!: number;
  articleService: ArticleService = inject(ArticleService);

  ngOnInit() {
    this.route.paramMap.subscribe((params: ParamMap) => {
      this.articleId = Number(params.get('id'));
      this.article = this.articleService.getArticleById(this.articleId);
    });
  }

  togglePublication(): void {
    this.article.isPublished = !this.article.isPublished;
  }

  isAdmin: boolean = true;

  toggleIsAdmin(): void {
    this.isAdmin = !this.isAdmin;
  }
}
