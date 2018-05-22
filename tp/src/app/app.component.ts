import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

    constructor() {

    }

    posts = [
        {
            title: 'Mon premier post',
            content: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Asperiores, assumenda consequuntur illum natus possimus praesentium repellendus voluptate! Ipsum, nostrum, sed. Ad, dignissimos distinctio dolorem et fugit laudantium minus obcaecati sequi!',
            loveIts: 0,
            created_at: Date
        },
        {
            title: 'Mon deuxième post',
            content: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Asperiores, assumenda consequuntur illum natus possimus praesentium repellendus voluptate! Ipsum, nostrum, sed. Ad, dignissimos distinctio dolorem et fugit laudantium minus obcaecati sequi!',
            loveIts: 0,
            created_at: Date
        },
        {
            title: 'Encore un post',
            content: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Asperiores, assumenda consequuntur illum natus possimus praesentium repellendus voluptate! Ipsum, nostrum, sed. Ad, dignissimos distinctio dolorem et fugit laudantium minus obcaecati sequi!',
            loveIts: 0,
            created_at: Date
        }
    ];
}
