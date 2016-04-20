import {Component} from 'angular2/core';
import {Router, CanDeactivate} from 'angular2/router';

@Component({
    templateUrl: '/app/contact.component.html'
})
export class ContactComponent implements CanDeactivate {
    
    constructor(private _router: Router) {
        
    }
    
    routerCanDeactivate(next, prev) {
        // console.log("next", next);
        // console.log("prev", prev);
        //if (this.form.isdirty)
        return confirm("are you sure?");
    }
    
    onSubmit(form){
        console.log(form);
        this._router.navigate(['Albums']);
    }
}