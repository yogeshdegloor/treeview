// Angular Imports
import { NgModule } from '@angular/core';

// This Module's Components
import { TreeviewComponent } from './treeview.component';
import { TreeviewRoutingModule } from './treeview-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatIconModule, MatButtonModule } from '@angular/material';
import {MatTreeModule} from '@angular/material/tree';


@NgModule({
    imports: [
        BrowserAnimationsModule,
        MatTreeModule,
        MatIconModule,
        MatButtonModule,
        TreeviewRoutingModule
    ],
    declarations: [
        TreeviewComponent,
    ],
    exports: [
        TreeviewComponent,
    ]
})
export class TreeviewModule {

}
