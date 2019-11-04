import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-post-list-item',
  templateUrl: './post-list-item.component.html',
  styleUrls: ['./post-list-item.component.css']
})
export class PostListItemComponent implements OnInit {
	created_at = new Date();

	@Input() title: string;
	@Input() content: string;
	@Input() loveIts: number;

	constructor() { }

	ngOnInit() { }

  	getCouleur() {
	  if(this.loveIts > 0) {
		  return 'green';
	  } else if(this.loveIts < 0) {
		  return 'red';
	  } else {
		  return 'black';
	  }
	}

	increment() {
		this.loveIts++;
	}
	
	decrement() {
		this.loveIts--;
	}
}
