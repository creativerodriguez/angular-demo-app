import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Rx';
import 'rxjs/add/operator/filter';
import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/distinctUntilChanged';
import { FormControl } from '@angular/forms';
import { GitHubService } from './github.service';

@Component({
  selector: 'app-observable-form',
  templateUrl: './observable-form.component.html',
  styleUrls: ['./observable-form.component.css'],
  providers: [GitHubService]
})
export class ObservableFormComponent implements OnInit {
  isLoading = true;
  users = [];
  searchControl = new FormControl();

  constructor(private _githubService: GitHubService){
  }

  ngOnInit() {
    this.searchControl.valueChanges
        .filter(text => text.length >= 3)   
        .debounceTime(400)   
        .distinctUntilChanged()    
        .subscribe(value => {
          this.isLoading = true; 
          this._githubService.getGitHubData(value)
                .subscribe(data => {
                  this.isLoading = false;        
                  this.users = data.items;                    
          });                                  
    });
  }

}
