import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NewpostComponent } from './newpost/newpost.component';
import { PostComponent } from './post/post.component';
import { AppComponent } from './app.component';
import { PostDetailComponent } from './post-detail/post-detail.component';


const appRoutes: Routes = [

    {
        path: '',
        component: PostComponent
    },

    {
        path: 'newpost',
        component: NewpostComponent
    },

    {
        path: 'posts/:id',
        component: PostDetailComponent
    },

];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
