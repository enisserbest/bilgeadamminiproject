import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/service/data.service';
import { User } from '../Models/login';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

  public filterText:string
  constructor(private dataService: DataService) { }
  userList: User[];
  ngOnInit(): void {
    this.getUser();
  }

  public getUser() {
    this.dataService.getUser().subscribe(response => {
      debugger
      this.userList = response;
    })
  }
}
