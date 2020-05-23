import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  got
  constructor() {
   }


  
  ngOnInit() {
  
  }

  onSearchChange(searchValue: string): void {
    fetch("http://www.omdbapi.com/?s="+searchValue+"&apikey=7076306d")  
    .then(response => response.json())
    .then(res => {
      console.log(res);
      this.got=res.Search
    });
    console.log(searchValue);
  }

}
