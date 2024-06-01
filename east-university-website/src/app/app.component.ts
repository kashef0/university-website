import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CourseListComponent } from './course-list/course-list.component';
import { NavmenuComponent } from './navmenu/navmenu.component';
import { ThemeToggleComponent } from './theme-toggle/theme-toggle.component';
import { RamSchemaComponent } from './ram-schema/ram-schema.component';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from "./home/home.component";

@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.scss',
    imports: [RouterOutlet, CourseListComponent, NavmenuComponent, ThemeToggleComponent, RamSchemaComponent,
        FooterComponent, HomeComponent]
})


export class AppComponent {
  title = 'east-university-website';
}
