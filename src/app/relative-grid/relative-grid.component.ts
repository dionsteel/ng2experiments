import { Component, OnInit, Input } from '@angular/core';
import * as _ from 'underscore';

@Component({
  selector: 'app-relative-grid',
  templateUrl: './relative-grid.component.html',
  styleUrls: ['./relative-grid.component.scss']
})
export class RelativeGridComponent implements OnInit {

  rows: number = 4;
  cols: number = 4;
  rowHeight: string = '80px';

  @Input() data: Array<any>;

  tiles: Array<any> = [
    // {text: 'One', cols: 3, rows: 1, color: 'lightblue'},
    // {text: 'Two', cols: 1, rows: 2, color: 'lightgreen'},
    // {text: 'Three', cols: 1, rows: 1, color: 'lightpink'},
    // {text: 'Four', cols: 2, rows: 1, color: '#DDBDF1'}
  ];

  constructor() { }

  ngOnInit() {
    if(!this.data){
      this.data = [
        { text: 'Education', value: 1300000000, children: [
          {text: 'teacher_salaries', value: 26000000 }
        ]},
        { text: 'Parliament', value: 30000000, children:
          [
            { text: 'politician_salaries', value: 18000000, children:
              [
                { text: 'PM', value: 508000 }
              ]
            }
          ]
        },
        
      ];
    } else {
      console.log("nesting!", this.data);
    }
    let lvl_total = _.reduce(this.data, (total, item: any, context) => {
      return total + item.value;
    }, 0);
    this.data.sort((a, b) => { return a.value - b.value; });
    let minDiff: number = this.data[1].value - this.data[0].value;
    for (let i = 2; i !== this.data.length; i++) {
      minDiff = Math.min(minDiff, this.data[i].value - this.data[i - 1].value);
    }
    let units =  Math.round(lvl_total / minDiff);
    let across = 1 + Math.round( this.data.length ) * units;
    this.cols = 1+across;
    console.log( units, across, lvl_total, minDiff, this.cols, this.data);
    this.tiles = _.map(this.data, (item: any) => {
      let blocks = Math.ceil((item.value / minDiff) * across  );
      
      console.log(item.children);
      let children : Array<any> = [];
      let tile : any = { text: item.text, rows: blocks, cols: blocks, color: '#ccc', value: item.value, children: children  };
      if(item.hasOwnProperty("children")){
        console.log("has children");
        // tile['children'] = item.children;
      }
      console.log(tile, item);
      return tile;
    });
  }

}
