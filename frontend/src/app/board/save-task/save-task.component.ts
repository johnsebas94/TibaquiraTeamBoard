import { Component, OnInit } from '@angular/core';
import { BoardService } from '../../services/board.service';
import { Router } from '@angular/router';
import {
  MatSnackBar,
  MatSnackBarHorizontalPosition,
  MatSnackBarVerticalPosition,
} from '@angular/material/snack-bar';

@Component({
  selector: 'app-save-task',
  templateUrl: './save-task.component.html',
  styleUrls: ['./save-task.component.css'],
})
export class SaveTaskComponent implements OnInit {
  registerData: any;
  message: string;
  horizontalPosition: MatSnackBarHorizontalPosition = 'end';
  verticalPosition: MatSnackBarVerticalPosition = 'top';
  durationInSeconds: number = 2;

  constructor(
    private _boardService: BoardService,
    private _router: Router,
    private _snackBar: MatSnackBar
  ) {
    this.registerData = {}; 
    this.message = '';
  }

  ngOnInit(): void {}
  saveTask() {
    if (!this.registerData.name || !this.registerData.description) {
      console.log('Failed process: Incomplete Data');
      this.message = 'Failed process: Incomplete Data';
      this.openSnackBarError(); 
      this.registerData = {};
    } else {
      this._boardService.saveTask(this.registerData).subscribe(
        
        (res) => {
          console.log(res);
          this._router.navigate(['/listTask']); 
          this.message = 'Task create';
          this.openSnackBarSuccesfull();
          this.registerData = {};
        },
        //Si el backend responde un error
        (err) => {
          console.log(err);
          this.message = err.error;
        }
      );
    }
  }

  deleteTask() {}
  openSnackBarSuccesfull() {
    this._snackBar.open(this.message, 'X', {
      horizontalPosition: this.horizontalPosition,
      verticalPosition: this.verticalPosition,
      duration: this.durationInSeconds * 1000,
      panelClass: ['style-snackBarTrue'],
    });
  }

  openSnackBarError() {
    this._snackBar.open(this.message, 'X', {
      horizontalPosition: this.horizontalPosition,
      verticalPosition: this.verticalPosition,
      duration: this.durationInSeconds * 1000,
      panelClass: ['style-snackBarFalse'],
    });
  }
}
