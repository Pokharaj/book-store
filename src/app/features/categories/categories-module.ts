import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CategoriesComponent } from './categories.component';

const routes: Routes = [
    { path: '', component: CategoriesComponent }
];

@NgModule({
    imports: [RouterModule.forChild(routes), CategoriesComponent],
    exports: [RouterModule]
})
export class CategoriesModule { }
