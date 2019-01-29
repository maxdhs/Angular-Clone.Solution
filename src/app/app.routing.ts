import { ModuleWithProviders }  from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PostComponent } from './post/post.component';
import { NewpostComponent } from './newpost/newpost.component';

const appRoutes: Routes = [


];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
