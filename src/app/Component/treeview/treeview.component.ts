import {NestedTreeControl} from '@angular/cdk/tree';
import {Component, Injectable} from '@angular/core';
import {MatTreeNestedDataSource} from '@angular/material/tree';
import {BehaviorSubject, Observable, of as observableOf} from 'rxjs';


export class FileNode {
    children: FileNode[];
    filename: string;
    type: any;
  }
@Component({
    selector: 'treeview',
    templateUrl: 'treeview.component.html',
    styleUrls: ['treeview.component.scss']
})
export class TreeviewComponent {
    nestedTreeControl: NestedTreeControl<FileNode>;
    nestedDataSource: MatTreeNestedDataSource<FileNode>;
    dataChange: BehaviorSubject<FileNode[]> = new BehaviorSubject<FileNode[]>([]);
  
    constructor() {
      this.nestedTreeControl = new NestedTreeControl<FileNode>(this._getChildren);
      this.nestedDataSource = new MatTreeNestedDataSource();
  
      this.dataChange.subscribe(data => this.nestedDataSource.data = data);
  
      this.dataChange.next([
        // {
        //   filename: "Projects",
        //   type: "",
        //   children: [
        //     {
        //       filename: "test3",
        //       type: "exe",
        //       children: [],
        //     }
        //   ],
        // },
        {
          filename: "Projects",
          type: "",
          children: [
            {
              filename: "Automation",
              type: "",
              children: [
                {
                  filename: "Mobile Automation",
                  type: "",
                  children: [
                    {
                      filename: "test3",
                      type: "exe",
                      children: [],
                    }
                  ],
                }
              ],
            },
            {
              filename: "DHFL",
              type: "",
              children: [
                {
                  filename: "test3",
                  type: "exe",
                  children: [],
                }
              ],
            },
            {
              filename: "Mobile Project",
              type: "",
              children: [
                {
                  filename: "test3",
                  type: "exe",
                  children: [],
                }
              ],
            },
            // {
            //   filename: "test3",
            //       type: "exe",
            //       children: [],
            // },
          ],
          
        },
        // {
        //   filename: "test2",
        //   type: "exe",
        //   children: [],
        // },
      ]);
    }
  
    private _getChildren = (node: FileNode) => { return observableOf(node.children); };
    
  hasNestedChild = (_: number, nodeData: FileNode) => {return !(nodeData.type); };

}
