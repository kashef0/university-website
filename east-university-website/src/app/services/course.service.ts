import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Course } from '../model/course';



@Injectable({
  providedIn: 'root'
})
export class CourseService {

  private URL = "assets/miun_courses.json";

  constructor(private http: HttpClient) { }

  //hämta data från json-fil

  getCourses(): Observable<Course[]> {
    return this.http.get<Course[]>(this.URL);
  }
}
