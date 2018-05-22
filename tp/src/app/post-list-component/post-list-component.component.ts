import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-post-list-component',
  templateUrl: './post-list-component.component.html',
  styleUrls: ['./post-list-component.component.css']
})
export class PostListComponentComponent implements OnInit {
    // post: string = 'super post';
    lastUpdate = new Date();
    @Input() postsTitle: string;
    @Input() postsContent: string;
    @Input() posts: any;
    @Input() postsNbLove = 0;
    // @Input() postnbDontLov: any;
    @Input() postsDate: Date;
    @Input() postnbDontLov = 0;
    postStatus: string = 'bienAimé';
    isAuth = false;

    constructor() {
        setTimeout(
            () => {
                this.isAuth = true;
            }, 500
        );
    }

  ngOnInit() {
  }
    getStatus() {
        return this.postStatus;
    }
    onLove() {
        console.log('nb aime avant');
        this.postsNbLove = this.postsNbLove + 1;
        return console.log(this.postsNbLove);
    }
    onDontLove() {
        console.log('nb DontLove aime avant');
        this.postnbDontLov = this.postnbDontLov + 1;
        return console.log(this.postnbDontLov);
    }

}
