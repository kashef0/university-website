
import { RouterModule, Routes } from '@angular/router';
import { CourseListComponent } from './course-list/course-list.component';
import { RamSchemaComponent } from './ram-schema/ram-schema.component';
import { NgModule } from '@angular/core';


export const routes: Routes = [
    { path: '', redirectTo: '/course-list', pathMatch: 'full' },
    { path: 'course-list', component: CourseListComponent },
    { path: 'ram-schema', component: RamSchemaComponent},
    { path: '**', redirectTo: '/course-list' }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})

export class AppComponent {}