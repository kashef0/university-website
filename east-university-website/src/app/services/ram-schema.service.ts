import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class RamSchemaService {

  constructor() { }

  countPoints(): number {
    const course = JSON.parse(localStorage.getItem('RamSchema') || '[]');
    let pointCounter = 0;
    course.forEach((element: { points: number; }) => {
      pointCounter += element.points;

    });
    return pointCounter;
  }

}
