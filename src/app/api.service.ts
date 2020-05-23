import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  got;

  constructor() {
   }
   onSearchChange(searchValue: string): void {
    fetch("http://www.omdbapi.com/?s="+searchValue+"&apikey=7076306d")  
    .then(response => response.json())
    .then(res => {
      console.log(res);
      this.got=res.Search
    });
  }

}

  


