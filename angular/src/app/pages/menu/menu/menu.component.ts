import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  constructor(private activatedRoute: ActivatedRoute, private router: Router) { }

  menuItems: string[] = ["ürünler", "kullanıcılar"];

  ngOnInit(): void {
  }

  clickValue(data: any) {
    console.log(data);
    if (data === "ürünler") {
      (<any>this.router).navigate(['/ürünler']);
    }
    else {
      (<any>this.router).navigate(['/kullanıcılar']);
    }
  }

}
