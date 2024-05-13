import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { Course } from '../model/course';
import { CommonModule } from '@angular/common';
import { RamSchemaService } from '../services/ram-schema.service';

@Component({
  selector: 'app-ram-schema',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './ram-schema.component.html',
  styleUrl: './ram-schema.component.scss'
})
export class RamSchemaComponent implements OnInit {
  pointCounter!: number;
  
  constructor(private ramSchemaService: RamSchemaService, private reloadContent: ChangeDetectorRef) {}

  countPoints(): void {
    this.pointCounter = this.ramSchemaService.countPoints();
  }

  RamSchema: Course[] | undefined;
  ngOnInit(): void {
  this.getTable();
  this.countPoints();
  }


  getTable(): void {
    const addCourse = localStorage.getItem("RamSchema");
    if (addCourse !== null) {
      this.RamSchema = JSON.parse(addCourse);
    } else {
      this.RamSchema = [];
    }
  }


  removeCourse(index: number): void {
    const removeCourseClient = this.RamSchema?.splice(index, 1)[0];
    if (removeCourseClient) {

      this.pointCounter -= removeCourseClient.points;
      const courseLocalStorage = JSON.parse(localStorage.getItem('RamSchema') || '[]');
      if (index >= 0 && index < courseLocalStorage.length) {
        courseLocalStorage.splice(index, 1);
        localStorage.setItem('RamSchema', JSON.stringify(courseLocalStorage));
      }
      this.reloadContent.detectChanges();
    }
    }
  
}
