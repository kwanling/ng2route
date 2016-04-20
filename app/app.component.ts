import {Component} from 'angular2/core';
import {RouteConfig, RouterOutlet, RouterLink} from 'angular2/router';

import {AlbumComponent} from './album.component';
import {AlbumsComponent} from './albums.component';
import {ContactComponent} from './contact.component';

@RouteConfig([
    { path: '/albums', name: 'Albums', component: AlbumsComponent, useAsDefault: true },
    { path: '/albums/:id', name: 'Album', component: AlbumComponent },
    { path: '/contact', name: 'Contact', component: ContactComponent },
    { path: '/*other', name: 'Other', redirectTo:['Albums'] }
])
@Component({
    selector: 'my-app',
    templateUrl: '/app/app.component.html',
    directives: [RouterOutlet, RouterLink]
    //directives: [ROUTER_PROVIDERS]
    
})
export class AppComponent {
}