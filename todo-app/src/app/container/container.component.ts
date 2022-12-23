import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { navigationLink } from '../models/navigationLink.interface';

@Component({
  selector: 'app-container',
  templateUrl: './container.component.html',
  styleUrls: ['./container.component.scss'],
})
export class ContainerComponent implements OnInit {
  activeLinkIndex = -1;
  navLinks: navigationLink[] = [
    { location: 'todo', label: 'ToDo list', index: 0 },
    { location: 'stats', label: 'Statistics', index: 1 },
  ];
  activeLink!: navigationLink;

  constructor(private router: Router) {}

  ngOnInit(): void {
    this.router.events.subscribe((res) =>
      // (this.activeLinkIndex = this.navLinks.indexOf(
      //   this.navLinks.find((tab) => tab.link === '.' + this.router.url)
      // ))
      console.log(res)
    );
  }
}
