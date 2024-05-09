import { Routes } from '@angular/router';
import { CourseListComponent } from './course-list/course-list.component';
import { RamSchemaComponent } from './ram-schema/ram-schema.component';


export const routes: Routes = [
    { path: "", redirectTo: "/course-list", pathMatch: "full" },
    { path: "course-list", component: CourseListComponent },
    { path: "ram-schema", component: RamSchemaComponent}
];


