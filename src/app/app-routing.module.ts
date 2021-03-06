import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Page1Component } from './page1/page1.component';
import { Page2Component } from './page2/page2.component';

const routes: Routes = [
	{
		'path': 'page1',
		'component': Page1Component
	},

	{
		'path': 'page2',
		'component': Page2Component
	},

	{
		'path': 'module1',
		'loadChildren': './module1/module1.module#Module1Module'
	},

	{
		'path': 'module2',
		'loadChildren': './module2/module2.module#Module2Module'
	},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
