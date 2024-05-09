import { Component } from '@angular/core';
import { CourseService } from '../services/course.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Course } from '../model/course';

@Component({
  selector: 'app-course-list',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './course-list.component.html',
  styleUrl: './course-list.component.scss'
})

export class CourseListComponent {

  
  courses_list: Course[] = [];
  filteringCourses: Course[] = [];
  public search: string = '';
  selectedSubject: string = "all";
  altSub: string[] = [];
  numberOfCourses: number = 0;
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
  }
  
  sortBy(row: string) {
    
    if (row == "code") {
      this.filteringCourses = this.courses_list.sort((el, re) => el.courseCode.localeCompare(re.courseCode));
    } else if (row == "coursename") {
      this.filteringCourses = this.courses_list.sort((el, re) => el.courseName.localeCompare(re.courseName));
    } else if (row == "progression") {
      this.filteringCourses = this.courses_list.sort((el, re) => el.progression.localeCompare(re.progression));
    } else if (row == "syllabus") {
      this.filteringCourses = this.courses_list.sort((el, re) => el.courseName.localeCompare(re.courseName));
    }
    this.sortBySubject();
    
  }

  // filttrera kurser baserat på kursnamn och kurskod
  onSubmit() {
    this.filteringCourses = [...this.courses_list];
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
    }


  
  showTotal() {
      this.numberOfCourses = this.courses_list.length; // visa antal kurser 
  }
}
