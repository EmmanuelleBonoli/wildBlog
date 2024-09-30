import { Routes } from '@angular/router';
import { HomePageComponent } from './home-page/home-page.component';
import { ArticleComponentComponent } from './article-component/article-component.component';
import { NotFoundComponentComponent } from './not-found-component/not-found-component.component';
import { ContactFormComponent } from './contact-form/contact-form.component';

export const routes: Routes = [
  { path: '', component: HomePageComponent },
  { path: 'article/:id', component: ArticleComponentComponent },
  { path: 'contact', component: ContactFormComponent },
  { path: '**', component: NotFoundComponentComponent },
];
