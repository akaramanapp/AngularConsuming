import { Component, OnInit } from '@angular/core';
import { posts } from './Models/posts';
import { DataService } from './Services/DataService';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'app';
  _posts: posts[];
  constructor(private  _dataService: DataService){
      
  }

  ngOnInit(){
    this._dataService
    .getAll<posts[]>()
    .subscribe((data: posts[]) => this._posts = data);
  }
}
