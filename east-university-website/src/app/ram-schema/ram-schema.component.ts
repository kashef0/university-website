import { Component, OnInit } from '@angular/core';
import { Course } from '../model/course';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-ram-schema',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './ram-schema.component.html',
  styleUrl: './ram-schema.component.scss'
})
export class RamSchemaComponent implements OnInit {
  RamSchema: Course[] | undefined;
  ngOnInit(): void {
  this.getTimetable();
  }


  getTimetable(): void {
    const addCourse = localStorage.getItem("RamSchema");
    if (addCourse !== null) {
      this.RamSchema = JSON.parse(addCourse);
    } else {
      this.RamSchema = [];
    }
  }


  removeCourse(index: number): void {
    const removecourseFromclient = this.RamSchema?.splice(index, 1)[0];

    const courseLocalStorage = JSON.parse(localStorage.getItem('RamSchema') || '[]');
    if (index >= 0 && index < courseLocalStorage.length) {
      courseLocalStorage.splice(index, 1);
      localStorage.setItem('RamSchema', JSON.stringify(courseLocalStorage));
    }
  }

}
