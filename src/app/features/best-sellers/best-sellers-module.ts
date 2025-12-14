import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BestSellersComponent } from './best-sellers.component';

const routes: Routes = [
    { path: '', component: BestSellersComponent }
];

@NgModule({
    imports: [RouterModule.forChild(routes), BestSellersComponent],
    exports: [RouterModule]
})
export class BestSellersModule { }
