import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CourseListComponent } from './course-list/course-list.component';
import { NavmenuComponent } from './navmenu/navmenu.component';
import { ThemeToggleComponent } from './theme-toggle/theme-toggle.component';
import { RamSchemaComponent } from './ram-schema/ram-schema.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CourseListComponent, NavmenuComponent, ThemeToggleComponent, RamSchemaComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})


export class AppComponent {
  title = 'east-university-website';
}
