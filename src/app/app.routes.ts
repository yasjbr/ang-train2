import { Router, Routes } from "@angular/router";
import { NewComponent } from './new/new.component';
import { New2Component } from './new2/new2.component';
import { New3Component } from './new3/new3.component';
import { OtherComponent } from './other/other.component';

export const routes: Routes = [
    { path: 'new', component: NewComponent },
    { path: 'new2', component: New2Component },
    { path: 'new3', component: New3Component },
    { path: 'other', component: OtherComponent },
    { path: '', component: OtherComponent },
    { path: '*', component: OtherComponent }
];

