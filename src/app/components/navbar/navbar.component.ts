import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {MatDialog} from '@angular/material/dialog';
import {ConfirmDialogComponent} from '../popups/confirm-dialog/confirm-dialog.component';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  constructor(
    private router: Router,
    private matDialog: MatDialog
  ) {
  }

  ngOnInit(): void {
  }

  logOut(): void {
    this.matDialog.open(ConfirmDialogComponent, {data: {action: 'log out'}})
      .afterClosed()
      .subscribe((res: boolean) => {
        if (res) {
          localStorage.removeItem('todo-task');
          this.router.navigate(['/auth/login']).then();
        }
      });

  }
}
