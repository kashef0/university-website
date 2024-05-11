import { Component, model } from '@angular/core';
import { CourseService } from '../services/course.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Course } from '../model/course';
import { TableModule } from 'primeng/table';
import { PaginatorModule } from 'primeng/paginator';

@Component({
  selector: 'app-course-list',
  standalone: true,
  imports: [CommonModule, FormsModule, TableModule,
    PaginatorModule],
  templateUrl: './course-list.component.html',
  styleUrl: './course-list.component.scss'
})

export class CourseListComponent {
  row: string = "";
  courses_list: Course[] = [];
  filteringCourses: Course[] = [];
  public search: string = '';
  selectedSubject: string = "all";
  altSub: string[] = [];
  numberOfCourses: number = 0;
  courses: any;
  constructor(private courseservice: CourseService) {}

  ngOnInit() {
    this.getCourses();
  }

  getCourses() {
    this.courseservice.getCourses().subscribe(data => {
      this.courses_list = data;
      this.courses_list.sort((a, b) => a.subject.localeCompare(b.subject));
      this.filteringCourses = [...this.courses_list];
      
      // skapa en ny array som inneh¨ller bara ämne
      this.altSub = [...new Set(this.courses_list.map(course => course.subject))];
      this.showTotal();
    });
  }
  onChange(UpdatedValue: string): void {
    
    if (this.selectedSubject !== UpdatedValue) {
      this.selectedSubject = UpdatedValue;
      if (this.selectedSubject !== 'All') {
        this.filteringCourses = this.courses_list.filter(course => course.subject === this.selectedSubject);
      } else {
        // om 'All' är vald, återställa filteringCourses till orginal list
        this.filteringCourses = [...this.courses_list];
      }
    }
    this.sortBySubject();
  } 
  // filtera kurser basserad på ämne
  sortBySubject() {
    this.filteringCourses = [...this.courses_list];
    if (this.selectedSubject !== 'All') {
      this.filteringCourses = this.filteringCourses.filter(course => course.subject === this.selectedSubject);
      
    } else {
      this.filteringCourses = [...this.courses_list];
    }
    this.showTotal();
  }
  
  sortBy(row: string) {
    let coursesToSort = this.filteringCourses.length > 0 ? this.filteringCourses : this.courses_list;        // Lägg till villkor för att sortera kurser baserat på filtrering
    if (row === "code") {
      this.filteringCourses = coursesToSort.sort((el, re) => el.courseCode.localeCompare(re.courseCode));
    } else if (row === "coursename") {
      this.filteringCourses = coursesToSort.sort((el, re) => el.courseName.localeCompare(re.courseName));
    } else if (row === "points") {
      this.filteringCourses = coursesToSort.sort((el, re) => el.points - re.points);
    } else if (row === "subject") {
      this.filteringCourses = coursesToSort.sort((el, re) => el.subject.localeCompare(re.subject));
    } else if (row === "syllabus") {
      this.filteringCourses = coursesToSort.sort((el, re) => el.courseName.localeCompare(re.courseName));
    }
    
  }

  // filttrera kurser baserat på kursnamn och kurskod
  onSubmit() {
    // this.filteringCourses = [...this.courses_list];
      console.log(this.search);
      this.filteringCourses = this.courses_list.filter(course =>
        course.courseCode.toLowerCase().includes(this.search.toLowerCase()) ||
        course.courseName.toLowerCase().includes(this.search.toLowerCase())
      
    )}
    // söka baserat på innehållet i sökfältet
    onSearch() {
      if (this.search.trim() !== '') {
        this.onSubmit();
      } else {
        this.selectedSubject = 'All';
        this.onSubmit();
      }
      this.showTotal();
    }


    addToSchema(course: Course): void {
      const RamSchemaJSON = localStorage.getItem('RamSchema');
      if (RamSchemaJSON !== null) {
        let RamSchema: Course[] = JSON.parse(RamSchemaJSON);
        if (!RamSchema.some(c => c.courseCode === course.courseCode)) {
          RamSchema.push(course);
          localStorage.setItem('RamSchema', JSON.stringify(RamSchema));
          alert('Kursen har lagts till i ditt ramschema.');
        } else {
          alert('Kursen finns redan i ditt ramschema.');
        }
      } else {
        let RamSchema: Course[] = [];
        RamSchema.push(course);
        localStorage.setItem('RamSchema', JSON.stringify(RamSchema));
        alert('Kursen har lagts till i ditt ramschema.');
      }
    }
    
  
  showTotal() {
      this.numberOfCourses = this.filteringCourses.length; // visa antal kurser 
  }
}


