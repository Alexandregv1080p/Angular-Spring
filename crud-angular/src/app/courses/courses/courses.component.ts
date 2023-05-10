import { Observable, catchError, of } from 'rxjs';
import { CoursesService } from '../services/courses.service';
import { Course } from './../model/course';
import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ErrorDialogComponent } from 'src/app/shared/components/error-dialog/error-dialog.component';


@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.scss']
})

export class CoursesComponent implements OnInit  {

  courses$: Observable<Course[]>;
  displayedColumns = ['name', 'category']

  

  constructor(
    private courserService: CoursesService,
    public dialog: MatDialog
    ){
    this.courses$ = this.courserService.list().pipe(
      catchError(error =>{
        this.onError('Ocorreu algum erro durante a aplicação')
        return of([])
      })
    )
  }
  
  onError(errorMsg: string) {
    this.dialog.open(ErrorDialogComponent, {
      data: errorMsg
    });
  }
  ngOnInit(): void {
    
  }
}
