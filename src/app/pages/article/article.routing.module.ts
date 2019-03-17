import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import articles from '../../../assets/articles';

import { ArticleComponent } from './article.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', component: ArticleComponent },
  { path: ':path', component: ArticleComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ArticleRoutingModule {}
