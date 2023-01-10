import { Component, Input, OnInit } from '@angular/core';
import { dropList } from '../models/dropList.interface';
import { ToDoTask } from '../models/todoTask.interface';
import { taskMapping } from '../models/taskListMapping.interface';

@Component({
  selector: 'app-statistics-view',
  templateUrl: './statistics-view.component.html',
  styleUrls: ['./statistics-view.component.scss'],
})

// * Po wejściu zliczamy ile zadań jest w takiej kolumnie(dzielimy zliczenie na poszczególne priortety -> ile z wysokim, ile z niskim...) i wyświetlamy informacje o każdej kolumnie w osobnych `<mat-card>`
export class StatisticsViewComponent implements OnInit {
  @Input() taskList!: taskMapping[];

  constructor() {}

  ngOnInit(): void {}
}
