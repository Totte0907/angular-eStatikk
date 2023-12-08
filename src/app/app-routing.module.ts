import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MobaCompareComponent } from './moba-compare/moba-compare.component';
import { ShooterCompareComponent } from './shooter-compare/shooter-compare.component';
import { BrCompareComponent } from './br-compare/br-compare.component';

const routes: Routes = [
  { path: 'moba', component: MobaCompareComponent },
  { path: 'shooter', component: ShooterCompareComponent },
  { path: 'br', component: BrCompareComponent },
  { path: '', redirectTo: '/moba', pathMatch: 'full' }, // Redirect to /moba by default
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
