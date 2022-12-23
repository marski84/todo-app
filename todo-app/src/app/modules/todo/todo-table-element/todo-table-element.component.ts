import { CdkDragDrop } from '@angular/cdk/drag-drop';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-todo',
  templateUrl: './todo-table-element.component.html',
  styleUrls: ['./todo-table-element.component.scss'],
})
export class TodoTableElemmentComponent implements OnInit {
  @Input() dropListData!: string[];
  @Input() listName!: string;
  @Output() onItemDroppedEmitted = new EventEmitter();

  constructor() {}

  ngOnInit(): void {}

  onItemDropped(event: CdkDragDrop<any>) {
    this.onItemDroppedEmitted.emit(event);
  }
}
