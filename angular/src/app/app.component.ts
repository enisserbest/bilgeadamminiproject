import { Component } from '@angular/core';
import { DataService } from './service/data.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  public active:boolean =false
  public loginActive:boolean = true;
  public newUserActive: boolean =false;
  constructor(private dataService: DataService) { 
    setInterval(() => {
      this.active = this.dataService.userControl;
      this.newUserActive = this.dataService.newUser;
      if(this.active==true){
        this.loginActive=false
      }
    }, 500);
  }
    ngOnInit() {
      
  }


}
