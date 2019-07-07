import { Component, OnInit } from '@angular/core';
import { CdkDragDrop, moveItemInArray, CdkDragMove } from '@angular/cdk/drag-drop';

@Component({
  selector: 'horizontal-sorting',
  templateUrl: './horizontal-sorting.component.html',
  styleUrls: ['./horizontal-sorting.component.scss']
})
export class HorizontalSortingComponent implements OnInit {

  timePeriods = [
    { id: 1, label: 'Bronze age' },
    { id: 2, label: 'Iron age' },
    { id: 3, label: 'Middle ages' },
    { id: 4, label: 'Early modern period' },
    { id: 5, label: 'Long nineteenth century' }
  ];

  constructor() { }

  ngOnInit() {
  }

  drop(event: CdkDragDrop<string[]>) {
    // console.log(`event.item: `, event.item);
    moveItemInArray(this.timePeriods, event.previousIndex, event.currentIndex);
  }

  onMove(event:  CdkDragMove) {
    console.log(`onMove event: `, event);
  }
}
