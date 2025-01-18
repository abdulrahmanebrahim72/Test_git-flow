import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TestComponent } from './test.component';
import { LazytestComponent } from './lazytest/lazytest.component';

const routes: Routes = 
[
  { path: '', redirectTo:'lazytest', pathMatch:'full' },
  { path: 'lazytest', component: LazytestComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TestRoutingModule { }
