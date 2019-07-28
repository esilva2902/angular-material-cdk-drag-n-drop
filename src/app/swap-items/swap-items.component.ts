import { Component, OnInit } from '@angular/core';
import { CdkDragDrop, moveItemInArray, transferArrayItem, CdkDragEnter, CdkDrag, CdkDragExit, CdkDragSortEvent, CdkDropList } from '@angular/cdk/drag-drop';

@Component({
  selector: 'swap-items',
  templateUrl: './swap-items.component.html',
  styleUrls: ['./swap-items.component.scss']
})
export class SwapItemsComponent implements OnInit {

  first = [{
    id: 1, 
    text: 'One'
  }];

  second = [{
    id: 2, 
    text: 'Two'
  }];

  third = [{
    id: 3, 
    text: 'Three'
  }];

  fourth = [{
    id: 4, 
    text: 'Fourth'
  }];

  previousContainer: CdkDropList;
  currentContainer: CdkDropList;

  constructor() { 
    this.resetContainers();
  }

  ngOnInit() {
  }

  drop(event: CdkDragDrop<string[]>, containerName: string) {
    // console.log(`CdkDragDrop event: `, event);
    console.log(`ContainerName: `, containerName);
    console.log(`CdkDragDrop event: `, event);
    console.log(`event.previousContainer.data: `, event.previousContainer.data);
    console.log(`event.container.data: `, event.container.data);

    if (event.previousContainer !== event.container) { 
      // transferArrayItem(event.previousContainer.data,
      //                   event.container.data,
      //                   event.previousIndex,
      //                   event.currentIndex);

      // let tmpPrevious = this.getData(event.previousContainer.data);
      // let tmpCurrent = this.getData(event.container.data);
      
      // this.insertData(event.previousContainer.data, tmpCurrent);
      // this.insertData(event.container.data, tmpPrevious);

      // this.swapItems(event.previousContainer, event.container);
    }
  }

  enter(event: CdkDragEnter, containerName: string) {
    console.log(`ContainerName: `, containerName);
    console.log(`CdkDragEnter event: `, event);
    // console.log(`CdkDragEnter event.item: `, event.item);

    this.currentContainer = event.container;

    if (this.previousContainer !== this.currentContainer) {
      console.log(`Transfering data...`);
      
      // let currentData = this.getData(this.currentContainer.data);
      // this.previousContainer.data.push(...currentData);

      this.previousContainer.data.length = 0;

      this.resetContainers();
    }
  }

  exit(event: CdkDragExit, containerName: string) {
    console.log(`ContainerName: `, containerName);
    console.log(`CdkDragExit event: `, event);
    // console.log(`While dragging... event.container.data.length`, event.container.data.length);
    // console.log(`While dragging... event.container.data[0].id`, event.container.data[0].id);

    this.previousContainer = event.container;
  }

  enterPredicate(item: CdkDrag<any>) {
    return item.data.id !== 1;
  }

  private getData(originalData: any[]) {
    let tmp = [ ];

    originalData.forEach(item => {
      tmp.push(item);
    });

    return tmp;
  }

  private insertData(container: any[], data: any[]) {
    container.length = 0;
    container.push(...data);
  }

  private swapItems(previousContainer: CdkDropList, targetContainer: CdkDropList) {
    let tmpPreviousData = this.getData(previousContainer.data);
    let tmpCurrentData = this.getData(targetContainer.data);
    
    this.insertData(previousContainer.data, tmpCurrentData);
    this.insertData(targetContainer.data, tmpPreviousData);  
  }

  private resetContainers() {
    this.previousContainer = null;
    this.currentContainer = null;
  }
}
