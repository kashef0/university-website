
import { RouterModule, Routes } from '@angular/router';
import { CourseListComponent } from './course-list/course-list.component';
import { RamSchemaComponent } from './ram-schema/ram-schema.component';
import { NgModule } from '@angular/core';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './home/home.component';


export const routes: Routes = [
    { path: '', redirectTo: '/home', pathMatch: 'full' },
    { path: 'home', component: HomeComponent },
    { path: 'course-list', component: CourseListComponent },
    { path: 'ram-schema', component: RamSchemaComponent},
    { path: 'footer', component: FooterComponent},
    { path: '**', redirectTo: '/home' }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})

export class AppComponent {}