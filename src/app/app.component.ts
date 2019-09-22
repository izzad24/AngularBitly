import { Component } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { FormControl } from '@angular/forms';

export interface Data{
  shortUrl: string
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  inputUrl = new FormControl('')
  outputUrl = new FormControl('')

  constructor(private http: HttpClient){}

  ngOnInit(){
  }
  onClick(){
    let url = "https://warm-scrubland-03694.herokuapp.com/urls"
    let params = {
      "urls": this.inputUrl.value,
    }

    console.log(params)
    
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
      })
    }

    this.http.post(url, params, httpOptions ).subscribe((data: Data) => {
      console.log(data.shortUrl)
       this.outputUrl.setValue(data.shortUrl)
    })
  }
}
